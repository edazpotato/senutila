import { ButtonStyle, InteractionHandler } from "../../typings/index";

import { BaseComponent } from "../../internals/index";

export class Button extends BaseComponent {
	private _text: string;
	private _style: ButtonStyle;
	constructor(
		text: string,
		style: ButtonStyle = "SECONDARY",
		handler: InteractionHandler
	) {
		super(handler);
		this._text = text;
		this._style = style;
	}

	get text(): string {
		return this._text;
	}

	get style(): ButtonStyle {
		return this._style;
	}
}

export function button(...args: ConstructorParameters<typeof Button>): Button {
	return new Button(...args);
}
