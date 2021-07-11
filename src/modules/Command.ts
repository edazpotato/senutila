import { BaseModule, Bot } from "../structures/index";

type CommandExecutor = (
	event: {
		reply: (languageKey: string) => void;
	},
	args: any,
	bot: Bot
) => Promise<any>;

export interface CommandOptions {
	description: string;
}

export default class Command extends BaseModule {
	executer: CommandExecutor;
	description: string;
	constructor(
		id: string,
		options: CommandOptions,
		executer: CommandExecutor
	) {
		super(id);
		this.executer = executer;
		this.description = options.description;
	}
}
