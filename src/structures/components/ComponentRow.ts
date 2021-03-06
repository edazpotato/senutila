import { Bot } from "../index";
import { ComponentRowComponent } from "../../typings/index";

type ArrayOfAtLeastOneComponentRowComponents = [
	ComponentRowComponent,
	ComponentRowComponent?,
	ComponentRowComponent?,
	ComponentRowComponent?,
	ComponentRowComponent?
];

export class ComponentRow {
	static ComponentType = 1;

	private _components: ArrayOfAtLeastOneComponentRowComponents;

	constructor(components: ArrayOfAtLeastOneComponentRowComponents) {
		this._components = components;
	}

	public get components() {
		return this._components;
	}

	public serialize(bot: Bot) {
		return {
			type: ComponentRow.ComponentType,
			components: this._components
				.map((component) => {
					if (!component) return null;
					return component.serialize(bot);
				})
				.filter((serializedComponent) => !!serializedComponent),
		};
	}
}

export function componentRow(
	...args: ConstructorParameters<typeof ComponentRow>
): ComponentRow {
	return new ComponentRow(...args);
}
