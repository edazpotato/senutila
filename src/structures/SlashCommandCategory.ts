import { Bot, SlashCommand } from "./index";

import { BaseStructure } from "../internals/index";
import Collection from "@discordjs/collection";

export class SlashCommandCategory extends BaseStructure {
	private _commands: Collection<string, SlashCommand> = new Collection();
	private _nameKey: string;

	constructor(id: string, nameKey: string, commands: SlashCommand[]) {
		super(id);
		this._nameKey = nameKey;

		// Add slash commands to Collection
		for (let command of commands) {
			if (this._commands.has(command.id))
				throw new Error(
					`Multiple slash commands with the same id: ${command.id} in category: ${this.id}.`
				);
			this._commands.set(command.id, command);
		}
	}

	public load(bot: Bot): SlashCommandCategory {
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

export function slashCommandCategory(
	...args: ConstructorParameters<typeof SlashCommandCategory>
): SlashCommandCategory {
	return new SlashCommandCategory(...args);
}
