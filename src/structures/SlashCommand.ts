import { BaseStructure, Interaction } from "../internals/index";
import { InteractionHandler, LanguageKey } from "../typings/index";

import { APIApplicationCommandInteraction } from "discord-api-types/v9";

const commandsNameRegExp = /^[\w-]{1,32}$/;

export class SlashCommand extends BaseStructure {
	private _descriptionKey: LanguageKey;
	private _handler: InteractionHandler;

	constructor(
		name: string,
		descriptionKey: LanguageKey,
		handler: InteractionHandler
	) {
		const commandID = name.toLowerCase();
		if (!commandsNameRegExp.test(commandID))
			throw new Error(
				`Slash command names must be between 1 and 32 characters is length (inclusive), and contain only letters, numbers, hyphens and underscores.`
			);
		super(commandID);
		this._descriptionKey = descriptionKey;
		this._handler = handler;
	}

	public handle(rawInteraction: APIApplicationCommandInteraction) {
		if (!this.bot)
			throw new Error(
				`Tried to handle interaction before slash command was loaded. ID: ${this.id}`
			);

		const interaction = new Interaction(this.bot, rawInteraction);

		return this._handler(this.bot, interaction);
	}

	public get descriptionKey(): LanguageKey {
		return this._descriptionKey;
	}
}

export function slashCommand(
	...args: ConstructorParameters<typeof SlashCommand>
): SlashCommand {
	return new SlashCommand(...args);
}
