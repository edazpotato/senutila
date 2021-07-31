import { ComponentRowComponent } from "../../typings/index";

type ArrayOfAtLeastOneComponentRowComponents = [
	ComponentRowComponent,
	ComponentRowComponent?,
	ComponentRowComponent?,
	ComponentRowComponent?,
	ComponentRowComponent?
];

export class ComponentRow {
	private _components: ArrayOfAtLeastOneComponentRowComponents;

	constructor(components: ArrayOfAtLeastOneComponentRowComponents) {
		this._components = components;
	}

	get components() {
		return this._components;
	}
}

export function componentRow(
	...args: ConstructorParameters<typeof ComponentRow>
): ComponentRow {
	return new ComponentRow(...args);
}
