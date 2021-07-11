import { BaseModule, Bot } from "../structures/index";

type StringValue = string | string[] | ((...args: any[]) => string);
type Strings = {
	[key: string]: StringValue;
};
type StringsCreator = (bot: Bot) => Strings;
export default class Language extends BaseModule {
	private stringsCreator: StringsCreator;
	private strings?: Strings;

	constructor(id: string, stringsCreator: StringsCreator) {
		super(id);
		this.stringsCreator = stringsCreator;
	}

	load(bot: Bot) {
		super.load(bot);
		this.strings = this.stringsCreator(bot);
		return this;
	}

	hasKey(key: string) {
		if (!this.loaded || !this.bot)
			return this.complainAboutNotBeingLoadedYet("hasKey");

		return this.strings?.hasOwnProperty(key);
	}

	getString(key: string, ...args: any[]): string | Error {
		if (!this.loaded || !this.bot)
			return this.complainAboutNotBeingLoadedYet("getString");

		const defaultLanguage = this.bot.languageHandler.modules.get(
			this.bot.languageHandler.default
		);

		if (!defaultLanguage || !this.strings)
			return this.complainAboutDefaultLanguageNotBeingSet();

		let value = this.hasKey(key)
			? this.strings[key]
			: defaultLanguage.hasKey(key)
			? defaultLanguage.getString(key, ...args)
			: defaultLanguage.getString("STRING_NOT_FOUND", key);

		if (typeof value === "function") {
			/* If it's a function, call it with the rest of the paramater. They are probably dynamic values. */
			value = value(...args);
		}

		if (Array.isArray(value)) {
			/* If it's an array of strings, then choose a random one */
			value = value[Math.floor(Math.random() * value.length)];
		}
		return value;
	}

	complainAboutDefaultLanguageNotBeingSet() {
		return new Error("Set the deafult language you silly potato!");
	}
}
