import { BaseModuleHandler, Bot } from "../structures/index";

import { DirectoryPath } from "../types/index";

export interface ListenerHandlerOptions {
	directory: DirectoryPath;
}

export default class ListenerHandler extends BaseModuleHandler {
	constructor(bot: Bot, options: ListenerHandlerOptions) {
		super(bot, options.directory);
	}
}
