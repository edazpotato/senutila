import {
	EmojiPartial,
	InteractionHandler,
	LanguageKey,
	Snowflake,
} from "../../typings/index";

import { BaseComponent } from "../../internals/index";
import { Bot } from "../index";

interface SelectMenuOption {
	label: LanguageKey;
	value: string;
	description: LanguageKey;
	emoji?: EmojiPartial;
}

type SelectMenuOptions = [
	SelectMenuOption,
	SelectMenuOption,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?
];

export class SelectMenu extends BaseComponent {
	static ComponentType = 3;

	private _options: SelectMenuOptions;
	private _minOptions: number;
	private _maxOptions: number;
	private _placeholder: LanguageKey;

	constructor(
		args: {
			placeholder: LanguageKey;
			minOptions: number;
			maxOptions: number;
			options: SelectMenuOptions;
		},
		handler: InteractionHandler
	) {
		super(handler);
		this._placeholder = args.placeholder;
		this._minOptions = args.minOptions;
		this._maxOptions = args.maxOptions;
		this._options = args.options;
	}

	public serialize(bot: Bot) {
		if (!bot.defaultLanguage)
			throw new Error("Set the default language mate");
		const language = bot.languages.get(bot.defaultLanguage);
		if (!language)
			throw new Error("Write the dictionary for the language mate");

		return {
			type: SelectMenu.ComponentType,
			custom_id: this._id,
			placeholder: language.string(this._placeholder),
			min_values: this._minOptions,
			max_values: this._maxOptions,
			options: this._options
				.map((option) => {
					if (!option) return null;
					return {
						label: language.string(option.label),
						value: option.value,
						description: language.string(option.description),
						emoji: option.emoji
							? {
									name: option.emoji.name,
									id: option.emoji.id,
							  }
							: undefined,
					};
				})
				.filter((serializedOption) => !!serializedOption),
		};
	}

	public get placeholderKey(): LanguageKey {
		return this._placeholder;
	}

	public get options(): SelectMenuOptions {
		return this._options;
	}

	public get minOptions(): number {
		return this._minOptions;
	}

	public get maxOptions(): number {
		return this._maxOptions;
	}
}

export function selectMenu(
	...args: ConstructorParameters<typeof SelectMenu>
): SelectMenu {
	return new SelectMenu(...args);
}
