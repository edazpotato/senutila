import { Bot, Embed } from "../structures/index";
import { LanguageKey, TopLevelMessageComponent } from "../typings/index";

import { GatewayInteractionCreateDispatchData } from "discord-api-types";

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
	constructor(bot: Bot, data: GatewayInteractionCreateDispatchData) {}

	async reply(
		data: InteractionResponseData = {
			content: "",
			ephemeral: false,
			components: [],
			embeds: [],
		}
	) {
		return;
	}
}
