import {
	ButtonStyles,
	EmojiPartial,
	InteractionHandler,
	LanguageKey,
	URL,
} from "../../typings/index";

import { BaseComponent } from "../../internals/index";
import { Bot } from "../index";

export class Button extends BaseComponent {
	static ComponentType = 2;

	private _label: LanguageKey;
	private _style: ButtonStyles;
	private _url?: URL;
	private _emoji?: EmojiPartial;
	private _disabled?: boolean;

	constructor(
		args: {
			label: LanguageKey;
			style: ButtonStyles;
			emoji?: EmojiPartial;
			disabled?: boolean;
			url?: URL;
		},
		handler?: InteractionHandler
	) {
		super(handler);
		this._label = args.label;
		this._style = args.style;
		this._emoji = args.emoji;
		this._disabled = args.disabled;
		this._url = args.url;
	}

	/**
	 * **DO NOT CALL THIS METHOD**. Unless you're a component row. This is because Discord requires buttons
	 * to be inside of component row.
	 */
	public serialize(bot: Bot) {
		if (!bot.defaultLanguage)
			throw new Error("Set the default language mate");
		const language = bot.languages.get(bot.defaultLanguage);
		if (!language)
			throw new Error("Write the dictionary for the language mate");
		const data: any = {
			type: Button.ComponentType,
			style: this._style,
			label: language.string(this._label),
		};

		if (this._url) {
			data.url = this._url;
		} else {
			data.id = this._id;
		}

		if (this._emoji) data.emoji = this._emoji;

		if (this._disabled !== undefined) data.disabled = this._disabled;

		return data;
	}

	public get url(): URL | undefined {
		return this._url;
	}

	public get label(): LanguageKey {
		return this._label;
	}

	public get style(): ButtonStyles {
		return this._style;
	}
}

export function button(...args: ConstructorParameters<typeof Button>): Button {
	return new Button(...args);
}
