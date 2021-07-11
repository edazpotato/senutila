import {
	CommandHandler,
	CommandHandlerOptions,
	LanguageHandler,
	LanguageHandlerOptions,
	ListenerHandler,
	ListenerHandlerOptions,
} from "../handlers/index";

import Logger from "./Logger";

interface BotDatabaseTableOptions {
	table: string;
	idColumn: string;
	languageColumn: string;
}

interface BotDatabase {
	guild: BotDatabaseTableOptions & { prefixColumn?: string };
	user: BotDatabaseTableOptions;
	getValue: (
		table: string,
		id: string,
		column: string
	) => Promise<string | false>;
	setValue: (
		table: string,
		id: string,
		column: string,
		value: string
	) => Promise<boolean>;
}

interface BotOptions {
	database: BotDatabase;
	languages: LanguageHandlerOptions;
	commands: CommandHandlerOptions;
	listeners: ListenerHandlerOptions;
}

/* Bot is the only one that doesn't extend BaseStructure becuase it loads all the other structures */
export default class Bot {
	languageHandler: LanguageHandler;
	commandHandler: CommandHandler;
	listenerHandler: ListenerHandler;
	database: BotDatabase;
	logger: Logger;

	constructor(options: BotOptions) {
		this.database = options.database;
		this.logger = Logger;

		this.languageHandler = new LanguageHandler(this, options.languages);
		this.commandHandler = new CommandHandler(this, options.commands);
		this.listenerHandler = new ListenerHandler(this, options.listeners);
	}

	start(token: string) {
		token;
	}
}
