import { Bot, Embed } from "../structures/index";
import {
	GatewayInteractionCreateDispatchData,
	InteractionType,
} from "discord-api-types/v9";
import {
	InteractionCallbackDataFlags,
	InteractionCallbackType,
	LanguageKey,
	TopLevelMessageComponent,
} from "../typings/index";

interface InteractionResponseData {
	content?: LanguageKey;
	ephemeral?: boolean;
	tts?: boolean;
	components?: [
		TopLevelMessageComponent,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?
	];
	// embeds?: [
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?,
	// 	Embed?
	// ];
}

export class Interaction {
	public bot: Bot;
	public readonly customID?: string;
	public readonly id: string;
	private readonly token: string;
	// public author: User;
	constructor(bot: Bot, data: GatewayInteractionCreateDispatchData) {
		this.bot = bot;

		this.id = data.id;
		this.token = data.token;

		if (data.type === InteractionType.MessageComponent) {
			this.customID = data.data.custom_id;
		}
	}

	async reply(rawData: InteractionResponseData) {
		const defaultLanguage = this.bot.defaultLanguage;
		if (!defaultLanguage)
			throw new Error(
				"Default langage not set while replying to an interaction."
			);
		const language = this.bot.languages.get(defaultLanguage);
		if (!language)
			throw new Error(
				"No language dictionary associated with default language while replying to an interaction."
			);

		let data: any = {};
		if (rawData.content) data.content = language.string(rawData.content);
		if (rawData.tts !== undefined) data.tts = rawData.tts;
		if (rawData.ephemeral !== undefined)
			data.flags = data.flags | InteractionCallbackDataFlags.Ephemeral;
		if (rawData.components !== undefined) {
			data.components = [];
			for (const component of rawData.components) {
				component &&
					data.components.push(component.serialize(this.bot));
			}
		}

		return this.bot.api.post(
			`/interactions/${this.id}/${this.token}/callback`,
			{
				body: {
					type: InteractionCallbackType.Message,
					data,
				},
			}
		);
	}
}
