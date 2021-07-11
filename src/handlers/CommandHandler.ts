import { BaseModuleHandler, Bot } from "../structures/index";

import { DirectoryPath } from "../types/index";

export interface CommandHandlerOptions {
	directory: DirectoryPath;
	textPrefix: string;
}

export default class CommandHandler extends BaseModuleHandler {
	prefix: string;
	constructor(bot: Bot, options: CommandHandlerOptions) {
		super(bot, options.directory);
		this.prefix = options.textPrefix;
	}
}
