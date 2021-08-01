import { Bot } from "../structures/index";

export class BaseStructure {
	protected _id: string;
	private _bot?: Bot;

	constructor(id: string) {
		this._id = id;
	}

	load(bot: Bot): BaseStructure {
		this._bot = bot;
		return this;
	}

	get id(): string {
		return this._id;
	}

	get bot(): Bot | undefined {
		return this._bot;
	}
}
