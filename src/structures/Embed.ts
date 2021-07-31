import { BaseStructure } from "../internals/index";

export class Embed extends BaseStructure {
	// TODO: Add embed code
}

export function embed(...args: ConstructorParameters<typeof Embed>): Embed {
	return new Embed(...args);
}
