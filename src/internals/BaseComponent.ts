import { InteractionHandler } from "../typings/index";

export class BaseComponent {
	protected _handler: InteractionHandler;
	constructor(handler: InteractionHandler) {
		this._handler = handler;
	}
}
