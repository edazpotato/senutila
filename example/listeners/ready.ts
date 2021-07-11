import { Event } from "senutila";

export default new Event("ready", async (event, bot) => {
	bot.logger.success("Successfully connected to Discord.");
});
