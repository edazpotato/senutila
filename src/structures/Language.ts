import {
	LanguageDictionary,
	LanguageDictionaryValue,
	LanguageID,
	LanguageKey,
	RawLanguageDictionary,
} from "../typings/index";

import { BaseStructure } from "../internals/index";
import Collection from "@discordjs/collection";

export class Language extends BaseStructure {
	declare _id: LanguageID;

	private _description: string;
	private _dictionary: LanguageDictionary;

	constructor(
		id: LanguageID,
		description: string,
		dictionary: LanguageDictionary | RawLanguageDictionary
	) {
		super(id);
		this._description = description;
		if (dictionary instanceof Collection) {
			this._dictionary = dictionary;
		} else {
			this._dictionary = new Collection<
				LanguageKey,
				LanguageDictionaryValue
			>(Object.entries(dictionary));
		}
	}

	public get id(): LanguageID {
		return this._id;
	}

	public get description(): string {
		return this._description;
	}
	public get dictionary(): LanguageDictionary {
		return this._dictionary;
	}

	public string(rawKey: LanguageKey, ...rest: any[]): string {
		if (!this.bot) throw new Error("Bruh can't do that before loaded");
		if (!this.bot.defaultLanguage)
			throw new Error("Set the default language mate");

		let key = rawKey;
		let args = rest;
		if (Array.isArray(rawKey)) {
			key = rawKey[0];
			args = [...rawKey.slice(1), ...rest];
		}

		let thing = this._dictionary.get(key);

		if (!thing) {
			if (this._id !== this.bot.defaultLanguage) {
				const defaultLanguage = this.bot.languages.get(
					this.bot.defaultLanguage
				);
				if (!defaultLanguage)
					throw new Error(
						"Make sure you actually have made a dictionary for the default language"
					);
				const defaultThing = defaultLanguage.dictionary.get(key);
				if (!defaultThing)
					throw new Error(
						"You must have set all strings in the default language's dictionary."
					);
				thing = defaultThing;
			} else {
				throw new Error(
					"You must have set all strings in the default language's dictionary."
				);
			}
		}

		if (typeof thing === "function") thing = thing(...rest);

		if (Array.isArray(thing))
			thing = thing[Math.floor(Math.random() * thing.length)];

		return thing;
	}
}

export function language(
	...args: ConstructorParameters<typeof Language>
): Language {
	return new Language(...args);
}
