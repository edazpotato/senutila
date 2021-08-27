import { BaseComponent, Interaction } from "../../internals/index";
import {
	ButtonStyles,
	EmojiPartial,
	InteractionHandler,
	LanguageKey,
	Snowflake,
	URL,
} from "../../typings/index";

import { APIMessageComponentInteraction } from "discord-api-types/v9";
import { Bot } from "../index";

export class Button extends BaseComponent {
	static ComponentType = 2;

	declare _handler: InteractionHandler;

	private _label: LanguageKey;
	private _style: ButtonStyles;
	private _url?: URL;
	private _emoji?: EmojiPartial;
	private _disabled?: boolean;
	public customID?: Snowflake;

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
		this.customID = bot.idGenerator.getUniqueID().toString();
		bot.buttonMap.set(this.customID, this);
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

		if (this._style !== ButtonStyles.Link) {
			data.custom_id = this.customID;
		}

		if (this._url) {
			data.url = this._url;
		} else {
			data.id = this._id;
		}

		if (this._emoji) data.emoji = this._emoji;

		if (this._disabled !== undefined) data.disabled = this._disabled;

		return data;
	}

	public handle(bot: Bot, rawInteraction: APIMessageComponentInteraction) {
		const interaction = new Interaction(bot, rawInteraction);

		return this._handler(bot, interaction);
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
