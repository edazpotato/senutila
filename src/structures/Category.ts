import { Bot, Command } from "./index";

import { BaseStructure } from "../internals/index";

export class Category extends BaseStructure {
	private _commands: Map<string, Command> = new Map();
	private _nameKey: string;

	constructor(id: string, nameKey: string, commands: Command[]) {
		super(id);
		this._nameKey = nameKey;

		// Add commands to map
		for (let command of commands) {
			if (this._commands.has(command.id))
				throw new Error(
					`Multiple commands with the same id: ${command.id} in category: ${this.id}.`
				);
			this._commands.set(command.id, command);
		}
	}

	load(bot: Bot): Category {
		this._commands.forEach((command) => {
			command.load(bot);
		});
		super.load(bot);
		return this;
	}

	get nameKey(): string {
		return this._nameKey;
	}

	get commands() {
		return this._commands;
	}
}

export function category(
	...args: ConstructorParameters<typeof Category>
): Category {
	return new Category(...args);
}
