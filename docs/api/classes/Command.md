[senutila](../docs/README.md) / [Exports](../modules.md) / Command

# Class: Command

## Hierarchy

- `BaseStructure`

  ↳ **`Command`**

## Constructors

### constructor

• **new Command**(`id`, `descriptionKey`, `handler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `descriptionKey` | `string` |
| `handler` | [`InteractionHandler`](../modules.md#interactionhandler) |

#### Overrides

BaseStructure.constructor

#### Defined in

[structures/Command.ts:12](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L12)

## Properties

### \_descriptionKey

• `Private` **\_descriptionKey**: `string`

#### Defined in

[structures/Command.ts:9](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L9)

___

### \_handler

• `Private` **\_handler**: [`InteractionHandler`](../modules.md#interactionhandler)

#### Defined in

[structures/Command.ts:10](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L10)

___

### \_id

• `Protected` **\_id**: `string`

#### Inherited from

BaseStructure.\_id

#### Defined in

[internals/BaseStructure.ts:4](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L4)

## Accessors

### bot

• `get` **bot**(): `undefined` \| [`Bot`](Bot.md)

#### Returns

`undefined` \| [`Bot`](Bot.md)

#### Defined in

[internals/BaseStructure.ts:20](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L20)

___

### descriptionKey

• `get` **descriptionKey**(): `string`

#### Returns

`string`

#### Defined in

[structures/Command.ts:38](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L38)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[internals/BaseStructure.ts:16](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L16)

## Methods

### handle

▸ **handle**(`rawInteraction`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawInteraction` | `APIApplicationCommandInteraction` |

#### Returns

`Promise`<`any`\>

#### Defined in

[structures/Command.ts:27](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L27)

___

### load

▸ **load**(`bot`): `BaseStructure`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](Bot.md) |

#### Returns

`BaseStructure`

#### Inherited from

BaseStructure.load

#### Defined in

[internals/BaseStructure.ts:11](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L11)
