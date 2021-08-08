import { BaseStructure, Interaction } from "../internals/index";

import { APIApplicationCommandInteraction } from "discord-api-types";
import { InteractionHandler } from "../typings/index";

const commandsNameRegExp = /^[\w-]{1,32}$/;

export class Command extends BaseStructure {
	private _descriptionKey: string;
	private _handler: InteractionHandler;

	constructor(
		id: string,
		descriptionKey: string,
		handler: InteractionHandler
	) {
		const commandID = id.toLowerCase();
		if (!commandsNameRegExp.test(commandID))
			throw new Error(
				`Command ids must be between 1 and 32 characters is length (inclusive), and contain only letters, numbers, hyphens and underscores.`
			);
		super(commandID);
		this._descriptionKey = descriptionKey;
		this._handler = handler;
	}

	public handle(rawInteraction: APIApplicationCommandInteraction) {
		if (!this.bot)
			throw new Error(
				`Tried to handle interaction before command was loaded. ID: ${this.id}`
			);

		const interaction = new Interaction(this.bot, rawInteraction);

		return this._handler(this.bot, interaction);
	}

	public get descriptionKey(): string {
		return this._descriptionKey;
	}
}

export function command(
	...args: ConstructorParameters<typeof Command>
): Command {
	return new Command(...args);
}
