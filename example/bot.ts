import {
	GatewayDispatchEvents,
	GatewayMessageCreateDispatchData,
} from "discord-api-types";
import {
	bot,
	button,
	category,
	command,
	componentRow,
	language,
	rawEventListener,
	selectMenu,
} from "../lib";

/* In an actual app you would do 'import { whatever } from "senutila"', but this is just to make handling dependencies easier on my end */

const myCoolBot = bot({ token: "my token" });

myCoolBot
	.registerLanguages([
		language("en-GB", "Propper english", {
			COMMAND_1_DESCRIPTION: "First command",
			COMMAND_2_DESCRIPTION: ["Second command", "Command 2"],
			CATEGORY_1_NAME: () => `Category 1`,
			COMMAND_1_BUTTON_1_TEXT: "Click me!",
			COMMAND_1_BUTTON_1_INTERACTION_RESPONSE_TEXT: "You did it!",
		}),
	])
	.setDefaultLanguage("en-GB")
	.addCommands([
		command("cmd_1", "COMMAND_1_DESCRIPTION", async (bot, interaction) =>
			interaction.reply({
				content: ["COMMAND_1_RESPONSE", Math.random() * 100],
				components: [
					componentRow([
						selectMenu(
							"COMMAND_1_SELECT_1_PLACEHOLDER",
							1,
							1,
							[
								{
									label: "COMMAND_1_SELECT_1_OPTION_1_LABEL",
									description:
										"COMMAND_1_SELECT_1_OPTION_1_DESCRIPTION",
									value: "1",
									emoji: {
										id: "12234554564645",
										name: "lmao",
									},
								},
								{
									label: "COMMAND_1_SELECT_1_OPTION_2_LABEL",
									description:
										"COMMAND_1_SELECT_1_OPTION_2_DESCRIPTION",
									value: "2",
								},
							],
							async (bot, interaction) => {}
						),
					]),
					button(
						"COMMAND_1_BUTTON_1_TEXT",
						"PRIMARY",
						async (bot, interaction) =>
							interaction.reply({
								content:
									"COMMAND_1_BUTTON_1_INTERACTION_RESPONSE_TEXT",
								ephemeral: true,
							})
					),
				],
			})
		),
		category("catgegory_1", "CATEGORY_1_NAME", [
			command(
				"cmd_2",
				"COMMAND_2_DESCRIPTION",
				async (bot, interaction) => {}
			),
		]),
	])
	.addRawEventListeners([
		rawEventListener(
			GatewayDispatchEvents.MessageCreate,
			async (bot, event: GatewayMessageCreateDispatchData) => {
				if (event.content === "Hello there")
					bot.api
						.post(`/channels/${event.channel_id}/messages`, {
							body: {
								content: "General kenobi",
							},
						})
						.catch((e) => {});
			}
		),
	])
	.start();
