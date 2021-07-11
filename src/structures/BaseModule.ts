import { Bot } from "./index";

export default class BaseStructure {
	readonly id: string;
	private _loaded: boolean;
	bot?: Bot;

	constructor(id: string) {
		this.id = id;
		this._loaded = false;
	}

	load(bot: Bot): BaseStructure {
		this.bot = bot;
		this._loaded = true;
		return this;
	}

	get loaded(): boolean {
		return this._loaded;
	}

	complainAboutNotBeingLoadedYet(methodName?: string) {
		return new Error(
			`${
				methodName || "This method"
			} is not available until this module is loaded!`
		);
	}
}
