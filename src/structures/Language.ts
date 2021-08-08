import {
	LanguageDictionary,
	LanguageDictionaryValue,
	LanguageID,
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
			this._dictionary = new Collection<string, LanguageDictionaryValue>(
				Object.entries(dictionary)
			);
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
}

export function language(
	...args: ConstructorParameters<typeof Language>
): Language {
	return new Language(...args);
}
