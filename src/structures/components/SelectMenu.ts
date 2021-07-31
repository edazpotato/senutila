import {
	InteractionHandler,
	LanguageKey,
	Snowflake,
} from "../../typings/index";

import { BaseComponent } from "../../internals/index";

interface SelectMenuOption {
	label: LanguageKey;
	value: string;
	description: LanguageKey;
	emoji?: {
		name: string;
		id: Snowflake;
	};
}

type SelectMenuOptions = [
	SelectMenuOption,
	SelectMenuOption,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?,
	SelectMenuOption?
];

export class SelectMenu extends BaseComponent {
	private _options: SelectMenuOptions;
	private _minOptions: number;
	private _maxOptions: number;
	private _placeholder: LanguageKey;

	constructor(
		placeholder: LanguageKey,
		minOptions: number,
		maxOptions: number,
		options: SelectMenuOptions,
		handler: InteractionHandler
	) {
		super(handler);
		this._placeholder = placeholder;
		this._options = options;
		this._minOptions = minOptions;
		this._maxOptions = maxOptions;
	}

	get placeholder(): LanguageKey {
		return this._placeholder;
	}

	get options(): SelectMenuOptions {
		return this._options;
	}

	get minOptions(): number {
		return this._minOptions;
	}

	get maxOptions(): number {
		return this._maxOptions;
	}
}

export function selectMenu(
	...args: ConstructorParameters<typeof SelectMenu>
): SelectMenu {
	return new SelectMenu(...args);
}
