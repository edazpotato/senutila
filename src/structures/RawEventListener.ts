import { Bot } from "./index";
import { GatewayDispatchEvents } from "discord-api-types/v9";
import { RawEventHandler } from "../typings/index";

export class RawEventListener {
	private _bot?: Bot;
	private _event: GatewayDispatchEvents;
	private _handler: RawEventHandler;

	constructor(event: GatewayDispatchEvents, handler: RawEventHandler) {
		this._event = event;
		this._handler = handler;
	}

	public load(bot: Bot): RawEventListener {
		this._bot = bot;
		return this;
	}

	public handle(data: any) {
		if (!this._bot) throw new Error("Not loaded yet!");
		console.log(`Handling event: ${this._event}`);
		return this._handler(this._bot, data);
	}

	public get bot(): Bot | undefined {
		return this._bot;
	}

	public get event(): GatewayDispatchEvents {
		return this._event;
	}
}

export function rawEventListener(
	...args: ConstructorParameters<typeof RawEventListener>
): RawEventListener {
	return new RawEventListener(...args);
}
