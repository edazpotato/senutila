import { Bot } from "./index";
import { GatewayDispatchEvents } from "discord-api-types";
import { RawEventHandler } from "../typings/index";

export class RawEventListener {
	private _bot?: Bot;
	private _event: GatewayDispatchEvents;
	private _handler: RawEventHandler;

	constructor(event: GatewayDispatchEvents, handler: RawEventHandler) {
		this._event = event;
		this._handler = handler;
	}

	load(bot: Bot): RawEventListener {
		this._bot = bot;
		return this;
	}

	get bot(): Bot | undefined {
		return this._bot;
	}

	get event(): GatewayDispatchEvents {
		return this._event;
	}
}

export function rawEventListener(
	...args: ConstructorParameters<typeof RawEventListener>
): RawEventListener {
	return new RawEventListener(...args);
}
