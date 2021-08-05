import {
	ButtonStyles,
	bot,
	button,
	category,
	command,
	componentRow,
	language,
	rawEventListener,
	selectMenu,
} from "../lib";
import {
	GatewayDispatchEvents,
	GatewayMessageCreateDispatchData,
	GatewayMessageReactionAddDispatchData,
} from "discord-api-types";

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
							{
								placeholder: "COMMAND_1_SELECT_1_PLACEHOLDER",
								minOptions: 1,
								maxOptions: 1,
								options: [
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
							},
							async (bot, interaction) => {}
						),
					]),
					button(
						{
							label: "COMMAND_1_BUTTON_1_TEXT",
							style: ButtonStyles.Primary,
						},
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
			async (bot, message: GatewayMessageCreateDispatchData) => {
				if (message.content === "Hello there")
					bot.api
						.post(`/channels/${message.channel_id}/messages`, {
							body: {
								content: "General Kenobi",
								components: [
									// Link buttons don't need a handler becuase an interaction doesn't get sent
									button({
										label: "RAW_EVENT_1_BUTTON_TEXT",
										style: ButtonStyles.Link,
										url: "https://potato.edaz.codes/",
									}).serialize(),
								],
							},
						})
						.catch((e) => {});
			}
		),
		rawEventListener(
			GatewayDispatchEvents.MessageCreate,
			async (bot, message: GatewayMessageCreateDispatchData) => {
				if (message.content.includes("69"))
					bot.api
						.post(`/channels/${message.channel_id}/messages`, {
							body: {
								content: "(nice)",
								message_reference: {
									message_id: message.id,
								},
							},
						})
						.catch((e) => {});
			}
		),
		rawEventListener(
			GatewayDispatchEvents.MessageReactionAdd,
			async (bot, event: GatewayMessageReactionAddDispatchData) => {
				const emoji = event.emoji;

				// Sometimes name is null, for example when it has been deleted froma  guild
				if (emoji.name) {
					const encodedEmoji = emoji.id
						? encodeURIComponent(`${emoji.name}:${emoji.id}`)
						: encodeURIComponent(emoji.name);

					bot.api
						.delete(
							`/channels/${event.channel_id}/messages/${event.message_id}/reactions/${encodedEmoji}/${event.user_id}`
						)
						.catch((e) => {});
				}
			}
		),
	])
	.start();
