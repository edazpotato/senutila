import { BaseStructure } from "../internals/index";
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
		const commandName = id.toLowerCase();
		if (!commandsNameRegExp.test(commandName))
			throw new Error(
				`Command names must be between 1 and 32 characters is length (inclusive), and contain only letters, numbers, hyphens and underscores.`
			);
		super(commandName);
		this._descriptionKey = descriptionKey;
		this._handler = handler;
	}

	get descriptionKey(): string {
		return this._descriptionKey;
	}
}

export function command(
	...args: ConstructorParameters<typeof Command>
): Command {
	return new Command(...args);
}
