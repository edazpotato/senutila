import { BaseModuleHandler, Bot } from "../structures/index";
import { CountryCode, DirectoryPath } from "../types/index";

import { Language } from "../modules/index";

export interface LanguageHandlerOptions {
	default: CountryCode;
	directory: DirectoryPath;
}

export default class ListenerHandler extends BaseModuleHandler {
	declare modules: Map<string, Language>;
	default: CountryCode;

	constructor(bot: Bot, options: LanguageHandlerOptions) {
		super(bot, options.directory);
		this.default = options.default;
	}
}
