import { Bot, Embed } from "../structures/index";
import { LanguageKey, TopLevelMessageComponent } from "../typings/index";

interface InteractionData {}

interface InteractionResponseData {
	content?: LanguageKey;
	ephemeral?: boolean;
	components?: [
		TopLevelMessageComponent?,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?,
		TopLevelMessageComponent?
	];
	embeds?: [
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?,
		Embed?
	];
}

export class Interaction {
	constructor(bot: Bot, data: InteractionData) {}

	async reply(
		data: InteractionResponseData = {
			content: "",
			ephemeral: false,
			components: [],
			embeds: [],
		}
	) {}
}
