import { Bot, Command } from "./index";

import { BaseStructure } from "../internals/index";
import Collection from "@discordjs/collection";

export class Category extends BaseStructure {
	private _commands: Collection<string, Command> = new Collection();
	private _nameKey: string;

	constructor(id: string, nameKey: string, commands: Command[]) {
		super(id);
		this._nameKey = nameKey;

		// Add commands to Collection
		for (let command of commands) {
			if (this._commands.has(command.id))
				throw new Error(
					`Multiple commands with the same id: ${command.id} in category: ${this.id}.`
				);
			this._commands.set(command.id, command);
		}
	}

	public load(bot: Bot): Category {
		this._commands.forEach((command) => {
			command.load(bot);
		});
		super.load(bot);
		return this;
	}

	public get nameKey(): string {
		return this._nameKey;
	}

	public get commands() {
		return this._commands;
	}
}

export function category(
	...args: ConstructorParameters<typeof Category>
): Category {
	return new Category(...args);
}
