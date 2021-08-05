import { InteractionHandler } from "../typings/index";

export class BaseComponent {
	protected _handler?: InteractionHandler;
	protected _id: string;

	constructor(handler?: InteractionHandler) {
		this._handler = handler;
		this._id = Math.floor(Math.random() * 100).toString(); // TODO: Need to do something better than this
	}

	serialize(): object {
		return {};
	}
}
