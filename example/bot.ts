const path = require("path");
require("dotenv").config({
	path: path.join(process.cwd(), "example", ".env"),
});

import {
	ActivityTypes,
	ButtonStyles,
	bot,
	button,
	componentRow,
	contextMenuCommand,
	language,
	messageContextMenuCommand,
	rawEventListener,
	selectMenu,
	slashCommand,
	slashCommandCategory,
	userContextMenuCommand,
} from "../lib";
import {
	GatewayDispatchEvents,
	GatewayIntentBits,
	GatewayMessageCreateDispatchData,
	GatewayMessageReactionAddDispatchData,
} from "discord-api-types";

import { Interaction } from "../lib/internals/index";
import chalk from "chalk";

/* In an actual app you would do 'import { whatever } from "senutila"', but this is just to make handling dependencies easier on my end */

if (!process.env.TOKEN) throw new Error("Set TOKEN in .env file pls");

const myCoolBot = bot({
	debug: true,
	machineID: 0,
	token: process.env.TOKEN,
	intents:
		GatewayIntentBits.GuildMessages |
		GatewayIntentBits.GuildMessageReactions, // The '|' character here is a bitwise OR operator, used to combine two gateway intents together
	presence: {
		status: "online",
		afk: false,
		activities: [
			{
				name: "The game of life.",
				type: ActivityTypes.Game,
			},
		],
	},
});

myCoolBot
	.registerLanguages([
		language("en-GB", "Proper English", {
			// This is temporary until I implement a better button ID system
			_COMPONENT_INTERACTION_HANDLER_NOT_FOUND:
				"You used a message component that doesn't exist (on my end). I've probably re-started since that component was added. Please try sending the command that created that component again.",
			COMMAND_1_DESCRIPTION: "First command",
			COMMAND_2_DESCRIPTION: ["Second command", "Command 2"],
			CATEGORY_1_NAME: () => `Category 1`,
			COMMAND_1_BUTTON_1_TEXT: "Click me!",
			COMMAND_1_BUTTON_1_INTERACTION_RESPONSE_TEXT: "You did it!",
			RAW_EVENT_1_RESPONSE_TEXT: "General Kenobi...",
			RAW_EVENT_1_BUTTON_1_TEXT: "Check out Senutila!",
			RAW_EVENT_1_BUTTON_2_TEXT: "Click me!",
			RAW_EVENT_1_BUTTON_2_TEXT_INTERACTION_RESPONSE_TEXT: (
				interaction: Interaction
			) => `This button's ID is ${interaction.customID}`,
			RAW_EVENT_2_RESPONSE_TEXT: "(nice)",
		}),
	])
	.setDefaultLanguage("en-GB")
	.addSlashCommands([
		slashCommand(
			"cmd_1",
			"COMMAND_1_DESCRIPTION",
			async (bot, interaction) =>
				interaction.reply({
					content: ["COMMAND_1_RESPONSE", Math.random() * 100],
					components: [
						componentRow([
							selectMenu(
								{
									placeholder:
										"COMMAND_1_SELECT_1_PLACEHOLDER",
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
						componentRow([
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
						]),
					],
				})
		),
		slashCommandCategory("catgegory_1", "CATEGORY_1_NAME", [
			slashCommand(
				"cmd_2",
				"COMMAND_2_DESCRIPTION",
				async (bot, interaction) => {}
			),
		]),
	])
	.addContextMenuCommands([
		contextMenuCommand(
			"message",
			"message_context__1",
			"MESSAGE_CONTEXT_MENU_COMMAND_1",
			async (bot, interaction) => {}
		),
		messageContextMenuCommand(
			"message_context_command_2",
			"MESSAGE_CONTEXT_MENU_COMMAND_2",
			async (bot, interaction) => {}
		),
		userContextMenuCommand(
			"user_context_command",
			"USER_CONTEXT_MENU_COMMAND",
			async (bot, interaction) => {}
		),
	]);
if (!myCoolBot.defaultLanguage) throw new Error(">:(");
const myLanguage = myCoolBot.languages.get(myCoolBot.defaultLanguage);
if (!myLanguage) throw new Error(">>:(");

myCoolBot.addRawEventListeners([
	rawEventListener(GatewayDispatchEvents.Ready, async (bot) => {
		console.info(chalk.green(`Ready!!!`));
	}),
	rawEventListener(
		GatewayDispatchEvents.MessageCreate,
		async (bot, message: GatewayMessageCreateDispatchData) => {
			console.info(
				chalk.blue(
					`Message from ${message.author.username}#${message.author.discriminator}: ${message.content}`
				)
			);
			if (message.content.toLowerCase() === "hello there") {
				console.log(message.author.public_flags);
				bot.api
					.post(`/channels/${message.channel_id}/messages`, {
						body: {
							content: myLanguage.string(
								"RAW_EVENT_1_RESPONSE_TEXT"
							),
							message_reference: {
								message_id: message.id,
							},
							components: [
								// Link buttons don't need a handler becuase an interaction doesn't get sent.
								// Buttons also need to be inside of an ActionRow.
								componentRow([
									button({
										label: "RAW_EVENT_1_BUTTON_1_TEXT",
										style: ButtonStyles.Link,
										url: "https://senutila.edaz.codes/",
									}),
									button(
										{
											label: "RAW_EVENT_1_BUTTON_2_TEXT",
											style: ButtonStyles.Success,
										},
										async (bot, interaction) =>
											interaction.reply({
												content: [
													"RAW_EVENT_1_BUTTON_2_TEXT_INTERACTION_RESPONSE_TEXT",
													interaction,
												],
												ephemeral: true,
											})
									),
								]).serialize(myCoolBot),
							],
						},
					})
					.catch((e) =>
						console.warn(
							chalk.yellow(
								`Error sending message to ${message.channel_id}: ${e}`
							)
						)
					);
			}
			if (message.content.includes("69"))
				bot.api
					.post(`/channels/${message.channel_id}/messages`, {
						body: {
							content: myLanguage.string(
								"RAW_EVENT_2_RESPONSE_TEXT"
							),
							message_reference: {
								message_id: message.id,
							},
						},
					})
					.catch((e) =>
						console.warn(
							chalk.yellow(
								`Error sending message to ${message.channel_id}: ${e}`
							)
						)
					);
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
					.catch((e) => {
						console.info(
							chalk.redBright(
								"I tried to remove the reaction but I didn't have the manage messages permission."
							)
						);
					});
			}
		}
	),
]);

myCoolBot.start();
