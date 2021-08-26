import {
	ContextMenuCommand,
	Language,
	RawEventListener,
	SlashCommand,
	SlashCommandCategory,
} from "./index";
import {
	GatewayDispatchEvents,
	GatewayInteractionCreateDispatchData,
	InteractionType,
} from "discord-api-types/v9";
import {
	GatewayIdentifyData,
	GatewaySendOpcodes,
	LanguageID,
	OutgoingGatewayDispatchPayload,
	Presence,
} from "../typings/index";

import Collection from "@discordjs/collection";
import { REST as DiscordRestAPIClient } from "@discordjs/rest";
import WebSocket from "ws";
import ZLib from "zlib-sync";
import chalk from "chalk";
import erlpack from "erlpack";

interface BotOptions {
	token: string;
	presence?: Presence;
	intents: number;
}

export class Bot {
	private __top_secret_TOKEN_dont_expose_this_please: string;
	private _inital_presence?: Presence;

	private _languages: Collection<LanguageID, Language> = new Collection();
	private _defaultLanguage?: LanguageID;
	private _slashCommandCategories: Collection<string, SlashCommandCategory> =
		new Collection();
	private _slashCommands: Collection<string, SlashCommand> = new Collection();
	private _contextMenuCommands: Collection<string, ContextMenuCommand> =
		new Collection();
	private _rawEventListeners: Collection<
		GatewayDispatchEvents,
		RawEventListener[]
	> = new Collection();

	private _intents;

	protected _ws?: WebSocket;
	private webSocketHeartbeatInterval?: number;
	private webSocketHeartbeatTimeout?: NodeJS.Timeout;
	private lastWebSocketHeartbeatReceivedAcknolegement?: boolean;
	private webSocketSequenceNumber = -1;
	private webSocketSessionID?: string;
	private resumingWebSocketConnection = false;

	private inflate = new ZLib.Inflate({
		chunkSize: 65535,
		// flush: zlib.Z_SYNC_FLUSH,
	});

	api: DiscordRestAPIClient;

	readonly apiVersion = 9;
	readonly gatewayEncoding: "etf" | "json" = "etf";
	readonly gatewayCompression: "zlib-stream" | null = null;
	private gatewayRoot?: string;
	private get gatewayAddress() {
		if (!this.gatewayRoot)
			throw new Error(
				"No gateway address set! Call Bot.start, not Bot.connect."
			);
		return `${this.gatewayRoot}/?v=${this.apiVersion}&encoding=${
			this.gatewayEncoding
		}${
			this.gatewayCompression ? `compress=${this.gatewayCompression}` : ""
		}`;
	}

	constructor(options: BotOptions) {
		this.__top_secret_TOKEN_dont_expose_this_please = options.token;
		this._inital_presence = options.presence;
		this._intents = options.intents;

		// Category for commands that aren't in any other ones
		this._slashCommandCategories.set(
			"__senutila_default_other",
			new SlashCommandCategory(
				"__senutila_default_other",
				"__SENUTILA_DEFAULT_CATEGORY_OTHER",
				[]
			)
		);

		this.api = new DiscordRestAPIClient({
			version: this.apiVersion.toString(),
		});
		this.api.setToken(this.__top_secret_TOKEN_dont_expose_this_please);
		// console.log("Set api token");
	}

	private checkThatEverythingHasBeenSetProperly(): boolean | Error {
		// Check languages
		if (this._languages.size < 1) {
			throw new Error("No languages have been registered yet.");
		}
		if (!this._defaultLanguage) {
			throw new Error("You need to set a defualt language.");
		}
		return true;
	}

	public setDefaultLanguage(language: LanguageID): Bot {
		if (this._languages.has(language)) {
			this._defaultLanguage = language;
			return this;
		}
		throw new Error(
			"You have to register the language before you can set it as the defualt."
		);
	}

	public registerLanguages(languages: Language[]): Bot {
		// Add languages to Collection
		for (const language of languages) {
			if (this._languages.has(language.id))
				throw new Error(
					`Multiple languages with the same ID: ${language.id}`
				);
			language.load(this);
			this._languages.set(language.id, language);
		}
		return this;
	}

	public addSlashCommands(
		thingsToRegister: (SlashCommandCategory | SlashCommand)[]
	): Bot {
		this.checkThatEverythingHasBeenSetProperly();

		for (const thing of thingsToRegister) {
			if (thing instanceof SlashCommand) {
				// Default category
				const category = this._slashCommandCategories.get(
					"__senutila_default_other"
				);
				// Stop people from being stupid
				if (!category)
					throw new Error(
						"If you remove the defualt category, you'll need to put all your commands inside your own categories."
					);
				// If you want to update a command, then you need to update it with the update method
				if (category.commands.has(thing.id))
					throw new Error(
						`Multiple commands with the same ID: ${thing.id} in the default category.`
					);
				thing.load(this);

				// Add the command to the default slash commands collection
				category.commands.set(thing.id, thing);

				// Add it to the slash commands collection
				this._slashCommands.set(thing.id, thing);
			} else {
				if (this._slashCommandCategories.has(thing.id))
					throw new Error(
						`Multiple categories with the same ID: ${thing.id}.`
					);
				thing.load(this);

				// Add the categories' commands to the global commands collection
				thing.commands.forEach((command) => {
					this._slashCommands.set(command.id, command);
				});

				// Add the cateogory to the global categories collection
				this._slashCommandCategories.set(thing.id, thing);
			}
		}
		return this;
	}

	public addContextMenuCommands(toRegister: ContextMenuCommand[]): Bot {
		this.checkThatEverythingHasBeenSetProperly();

		for (const thing of toRegister) {
			thing.load(this);
			this._contextMenuCommands.set(thing.id, thing);
		}

		return this;
	}

	public addRawEventListeners(listeners: RawEventListener[]): Bot {
		for (const listener of listeners) {
			listener.load(this);
			this._rawEventListeners.set(listener.event, [
				listener,
				...(this._rawEventListeners.get(listener.event) || []),
			]);
		}
		return this;
	}

	private terminateWebSocketConnection() {
		if (!this._ws) return;
		if (this.webSocketHeartbeatTimeout)
			clearTimeout(this.webSocketHeartbeatTimeout);
		this._ws.terminate();
	}

	private sendWebSocketMessage(
		opcode: GatewaySendOpcodes,
		payload?: any,
		callback?: (err?: Error) => void
	) {
		if (!this._ws) return false;
		let data: OutgoingGatewayDispatchPayload = { op: opcode };
		if (payload !== undefined) data.d = payload;
		let compressed;
		if (this.gatewayEncoding === "etf") {
			compressed = erlpack.pack(data);
		} else {
			compressed = JSON.stringify(data);
		}
		// console.log(compressed);
		return this._ws.send(compressed, callback);
	}

	private resumeWebSocketConnection() {
		this.resumingWebSocketConnection = true;
		console.info(chalk.blue("Resuming connection..."));
		this.sendWebSocketMessage(
			GatewaySendOpcodes.Resume,
			{
				token: this.__top_secret_TOKEN_dont_expose_this_please,
				session_id: this.webSocketSessionID,
				seq: this.webSocketSequenceNumber,
			},
			() => {
				this.resumingWebSocketConnection = false;
			}
		);
	}

	private sendWebSocketHeartbeat(bot: Bot, schedule: boolean = true) {
		/*
			Becuase this method is sometimes called from a setTimeout,
			'this' won't always refer to the Bot instance, so it needs
			to be passed in as a parameter. Also remember to not use
			'this' in this method, use 'bot' inststead.
		*/

		if (bot.lastWebSocketHeartbeatReceivedAcknolegement === false) {
			bot.terminateWebSocketConnection();
			bot.resumeWebSocketConnection();
			return;
		}

		bot.lastWebSocketHeartbeatReceivedAcknolegement = false;
		// console.log(GatewaySendOpcodes.Heartbeat);
		bot.sendWebSocketMessage(GatewaySendOpcodes.Heartbeat, null);
		// console.log("Sent heartbeat!");

		if (schedule) {
			if (!bot.webSocketHeartbeatInterval) return;
			bot.webSocketHeartbeatTimeout = setTimeout(
				() => bot.sendWebSocketHeartbeat(bot),
				bot.webSocketHeartbeatInterval
			);
		}
	}

	private sendWebSocketIdentify() {
		console.info(chalk.blue("Sending identify message..."));
		const data: GatewayIdentifyData = {
			token: this.__top_secret_TOKEN_dont_expose_this_please,
			intents: this._intents,
			properties: {
				$os: process.platform,
				$browser: "Senutila",
				$device: "Senutila",
			},
			...{ presence: this._inital_presence },
		};

		this.sendWebSocketMessage(GatewaySendOpcodes.Identify, data);
	}

	private handleWebSocketMessage({
		data: rawData,
		type,
		target,
	}: {
		data: Buffer;
		type: string;
		target: WebSocket;
	}) {
		if (!rawData) return;
		let data: any = rawData; // I need a mutable value here

		if (this.gatewayCompression === "zlib-stream") {
			const l = data.length;
			const flush =
				l >= 4 &&
				data[l - 4] === 0x00 &&
				data[l - 3] === 0x00 &&
				data[l - 2] === 0xff &&
				data[l - 1] === 0xff;

			this.inflate.push(data, flush && ZLib.Z_SYNC_FLUSH);
			if (!flush) return;
			data = this.inflate.result;
		}

		if (this.gatewayEncoding === "etf") {
			if (!Buffer.isBuffer(data))
				data = Buffer.from(new Uint8Array(data));
			try {
				data = erlpack.unpack(data);
			} catch (err) {
				return console.warn(`Error decoding etf encoded data: ${err}`);
			}
		} else {
			data = JSON.parse(data);
		}

		// console.log(data);

		const messageData = data as {
			op: number;
			d?: any;
			s?: number;
			t?: string;
		};

		const opcode = messageData.op;
		const dataContent = messageData.d;
		const sequence = data.s;
		const eventName = data.t;

		if (sequence) {
			if (
				this.webSocketSequenceNumber === undefined ||
				sequence > this.webSocketSequenceNumber
			)
				this.webSocketSequenceNumber = sequence;
		}

		// if (opcode !== 0)
		console.log(`OP: ${opcode}, Name: ${eventName}`);

		switch (opcode) {
			case 0:
				if (eventName)
					this.handleWebSocketEventDispatch(eventName, dataContent);
				break;

			case 1:
				this.sendWebSocketHeartbeat(this, false);
				break;

			case 7:
				break;

			case 9:
				if (dataContent === true) {
					this.resumeWebSocketConnection();
				} else {
					console.info(
						chalk.yellow(
							"Restarting bot in 6 seconds due to invalid session..."
						)
					);
					setTimeout(() => {
						this.connect(this, false);
					}, 6 * 1000);
				}
				break;

			case 10:
				this.webSocketHeartbeatInterval =
					dataContent.heartbeat_interval;
				// console.log(
				// 	`Heartbeat interval: ${this.webSocketHeartbeatInterval}`
				// );
				this.webSocketHeartbeatTimeout = setTimeout(() => {
					// console.log("About to hearbeat!");
					this.sendWebSocketHeartbeat(this);
				}, dataContent.heartbeat_interval * Math.random());
				if (!this.resumingWebSocketConnection)
					this.sendWebSocketIdentify();
				break;

			case 11:
				this.lastWebSocketHeartbeatReceivedAcknolegement = true;
				break;
		}
	}

	private handleWebSocketEventDispatch(
		eventName: GatewayDispatchEvents,
		data: any
	) {
		const customHandlers = this._rawEventListeners.get(eventName);
		if (customHandlers) {
			customHandlers.forEach((handler) => {
				handler.handle(data);
			});
		}

		if (eventName === GatewayDispatchEvents.InteractionCreate) {
			const interaction = data as GatewayInteractionCreateDispatchData;
			if (interaction.type === InteractionType.ApplicationCommand) {
				const command = this._slashCommands.get(interaction.data.name);
				if (command) command.handle(interaction);
			} else if (interaction.type === InteractionType.MessageComponent) {
			}
		}
	}

	private connect(bot: Bot, resume: boolean = false): Bot {
		const ws = new WebSocket(bot.gatewayAddress);

		ws.addEventListener("open", () => {
			console.info(chalk.green("WebSocket opened!"));
			if (resume) {
				bot.resumeWebSocketConnection();
			}
		});
		ws.addEventListener("close", (e) => {
			console.info(
				chalk.red(
					"WebSocket closed. Will try and reopen in 6 seconds..."
				),
				e.reason,
				e.code
			);
			setTimeout(() => bot.connect(bot, true), 6 * 1000);
		});
		ws.addEventListener("error", (event) => {
			console.warn("WebSocket error:", event.error);
		});
		ws.addEventListener("message", (event) => {
			// console.log(event.data);
			bot.handleWebSocketMessage(event);
		});

		bot._ws = ws;
		return bot;
	}

	public async start(): Promise<Bot> {
		const res = (await this.api.get("/gateway/bot")) as {
			url: string;
			shards: number;
			session_start_limit: {
				total: number;
				remaining: number;
				reset_after: number;
				max_concurrency: number;
			};
		};

		this.gatewayRoot = res.url;

		console.info(
			`Session start limits:
${chalk.blue("Total:")} ${chalk.cyan(res.session_start_limit.total)}
${chalk.blue("Remaining:")} ${chalk.cyan(res.session_start_limit.remaining)}
${chalk.blue("Resets in:")} ${chalk.cyan(
				res.session_start_limit.reset_after + "ms"
			)}
${chalk.blue("Per 5 seconds:")} ${chalk.cyan(
				res.session_start_limit.max_concurrency
			)}`
		);

		this.connect(this);

		return this;
	}

	public get slashCommandCategories() {
		return this._slashCommandCategories;
	}
}

export function bot(...args: ConstructorParameters<typeof Bot>): Bot {
	return new Bot(...args);
}
