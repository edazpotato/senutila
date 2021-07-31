import { Bot } from "../structures/index";

export class BaseStructure {
	protected _id: string;
	private _bot?: Bot;
	private _loaded: boolean = false;

	constructor(id: string) {
		this._id = id;
	}

	load(bot: Bot) {
		this._bot = bot;
		this._loaded = true;
		return this._loaded;
	}

	get id(): string {
		return this._id;
	}

	get bot(): Bot | undefined {
		return this._bot;
	}

	get loaded(): boolean {
		return this._loaded;
	}
}
