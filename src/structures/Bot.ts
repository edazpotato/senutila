import { Category, Command, Language, RawEventListener } from "./index";
import { LanguageID, Snowflake } from "../typings/index";

import Collection from "@discordjs/collection";
import { REST as DiscordRestAPIClient } from "@discordjs/rest";
import { GatewayDispatchEvents } from "discord-api-types";
import WebSocket from "ws";

interface BotOptions {
	token: string;
}

export class Bot {
	private __top_secret_TOKEN_dont_expose_this_please: string;

	private _languages: Collection<LanguageID, Language> = new Collection();
	private _defaultLanguage?: LanguageID;
	private _categories: Collection<string, Category> = new Collection();
	private _rawEventListeners: Collection<
		GatewayDispatchEvents,
		RawEventListener[]
	> = new Collection();

	protected _ws?: WebSocket;

	api: DiscordRestAPIClient;

	readonly apiVersion = 9;

	constructor(options: BotOptions) {
		this.__top_secret_TOKEN_dont_expose_this_please = options.token;

		// Category for commands that aren't in any other ones
		this._categories.set(
			"__senutila_default_other",
			new Category(
				"__senutila_default_other",
				"__SENUTILA_DEFAULT_CATEGORY_OTHER",
				[]
			)
		);

		this.api = new DiscordRestAPIClient({
			version: this.apiVersion.toString(),
		}).setToken(this.__top_secret_TOKEN_dont_expose_this_please);
	}

	checkThatEverythingHasBeenSetProperly(): Bot {
		// Check languages
		if (this._languages.size < 1) {
			throw new Error("No languages have been registered yet.");
		}
		if (!this._defaultLanguage) {
			throw new Error("You need to set a defualt language.");
		}

		return this;
	}

	setDefaultLanguage(language: LanguageID): Bot {
		if (this._languages.has(language)) {
			this._defaultLanguage = language;
			return this;
		}
		throw new Error(
			"You have to register the language before you can set it as the defualt."
		);
	}

	registerLanguages(languages: Language[]): Bot {
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

	addCommands(thingsToRegister: (Category | Command)[]): Bot {
		this.checkThatEverythingHasBeenSetProperly();

		for (const thing of thingsToRegister) {
			if (thing instanceof Command) {
				// Default category
				const category = this._categories.get(
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
				category.commands.set(thing.id, thing);
			} else {
				if (this._categories.has(thing.id))
					throw new Error(
						`Multiple categories with the same ID: ${thing.id}.`
					);
				thing.load(this);
				this._categories.set(thing.id, thing);
			}
		}
		return this;
	}

	addRawEventListeners(listeners: RawEventListener[]): Bot {
		for (const listener of listeners) {
			this._rawEventListeners.set(listener.event, [
				listener,
				...(this._rawEventListeners.get(listener.event) || []),
			]);
		}
		console.log(this._rawEventListeners);
		return this;
	}

	start(): Bot {
		return this;
	}

	get categories() {
		return this._categories;
	}
}

export function bot(...args: ConstructorParameters<typeof Bot>): Bot {
	return new Bot(...args);
}
