import { BaseStructure, Interaction } from "../internals/index";
import { InteractionHandler, LanguageKey } from "../typings/index";

import { APIApplicationCommandInteraction } from "discord-api-types/v9";

type ContextMenuType = "user" | "message";

type ContextMenuCommandArgsWithoutType = [
	string,
	LanguageKey,
	InteractionHandler
];

type ContextMenuCommandArgs = [
	ContextMenuType,
	...ContextMenuCommandArgsWithoutType
];

export class ContextMenuCommand extends BaseStructure {
	private _handler: InteractionHandler;
	private _nameKey: LanguageKey;
	private _type: ContextMenuType;

	constructor(...args: ContextMenuCommandArgs) {
		super(args[1]);
		this._type = args[0];
		this._nameKey = args[2];
		this._handler = args[3];
	}

	public handle(rawInteraction: APIApplicationCommandInteraction) {
		if (!this.bot)
			throw new Error(
				`Tried to handle interaction before slash command was loaded. ID: ${this.id}`
			);

		const interaction = new Interaction(this.bot, rawInteraction);

		return this._handler(this.bot, interaction);
	}

	public getNameKey(): LanguageKey {
		return this._nameKey;
	}

	public getType(): ContextMenuType {
		return this._type;
	}
}

export function contextMenuCommand(
	...args: ConstructorParameters<typeof ContextMenuCommand>
): ContextMenuCommand {
	return new ContextMenuCommand(...args);
}

export function userContextMenuCommand(
	...args: ContextMenuCommandArgsWithoutType
): ContextMenuCommand {
	return new ContextMenuCommand("user", ...args);
}

export function messageContextMenuCommand(
	...args: ContextMenuCommandArgsWithoutType
): ContextMenuCommand {
	return new ContextMenuCommand("message", ...args);
}
