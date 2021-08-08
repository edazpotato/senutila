[senutila](../docs/README.md) / [Exports](../modules.md) / Category

# Class: Category

## Hierarchy

- `BaseStructure`

  ↳ **`Category`**

## Constructors

### constructor

• **new Category**(`id`, `nameKey`, `commands`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `nameKey` | `string` |
| `commands` | [`Command`](Command.md)[] |

#### Overrides

BaseStructure.constructor

#### Defined in

[structures/Category.ts:10](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L10)

## Properties

### \_commands

• `Private` **\_commands**: `Collection`<`string`, [`Command`](Command.md)\>

#### Defined in

[structures/Category.ts:7](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L7)

___

### \_id

• `Protected` **\_id**: `string`

#### Inherited from

BaseStructure.\_id

#### Defined in

[internals/BaseStructure.ts:4](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L4)

___

### \_nameKey

• `Private` **\_nameKey**: `string`

#### Defined in

[structures/Category.ts:8](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L8)

## Accessors

### bot

• `get` **bot**(): `undefined` \| [`Bot`](Bot.md)

#### Returns

`undefined` \| [`Bot`](Bot.md)

#### Defined in

[internals/BaseStructure.ts:20](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L20)

___

### commands

• `get` **commands**(): `Collection`<`string`, [`Command`](Command.md)\>

#### Returns

`Collection`<`string`, [`Command`](Command.md)\>

#### Defined in

[structures/Category.ts:36](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L36)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[internals/BaseStructure.ts:16](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L16)

___

### nameKey

• `get` **nameKey**(): `string`

#### Returns

`string`

#### Defined in

[structures/Category.ts:32](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L32)

## Methods

### load

▸ **load**(`bot`): [`Category`](Category.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](Bot.md) |

#### Returns

[`Category`](Category.md)

#### Overrides

BaseStructure.load

#### Defined in

[structures/Category.ts:24](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L24)
