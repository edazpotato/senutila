import { Command } from "senutila";

export default new Command(
	"ping",
	{ description: "PING_COMMAND_DESCRIPTION" },
	async (event, args, bot) => {
		return event.reply("PING_COMMAND_RESPONSE_TEXT");
	}
);
