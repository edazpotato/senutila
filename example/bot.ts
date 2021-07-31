import {
	bot,
	button,
	category,
	command,
	componentRow,
	language,
	selectMenu,
} from "../src";

const myCoolBot = bot("my token", {});

myCoolBot.registerLanguages([
	language("en-GB", "Propper english", {
		COMMAND_1_DESCRIPTION: "First command",
		COMMAND_2_DESCRIPTION: ["Second command", "Command 2"],
		CATEGORY_1_NAME: () => `Category 1`,
		COMMAND_1_BUTTON_1_TEXT: "Click me!",
		COMMAND_1_BUTTON_1_INTERACTION_RESPONSE_TEXT: "You did it!",
	}),
]);

myCoolBot.setDefaultLanguage("en-GB");

myCoolBot.registerCommands([
	command("cmd_1", "COMMAND_1_DESCRIPTION", async (interaction) =>
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
						async (interaction) => {}
					),
				]),
				button(
					"COMMAND_1_BUTTON_1_TEXT",
					"PRIMARY",
					async (interaction) =>
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
		command("cmd_2", "COMMAND_2_DESCRIPTION", async (interaction) => {}),
	]),
]);

myCoolBot.start();
