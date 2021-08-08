[senutila](../docs/README.md) / [Exports](../modules.md) / Language

# Class: Language

## Hierarchy

- `BaseStructure`

  ↳ **`Language`**

## Constructors

### constructor

• **new Language**(`id`, `description`, `dictionary`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | \`${string}-${string}\` |
| `description` | `string` |
| `dictionary` | [`LanguageDictionary`](../modules.md#languagedictionary) \| [`RawLanguageDictionary`](../interfaces/RawLanguageDictionary.md) |

#### Overrides

BaseStructure.constructor

#### Defined in

[structures/Language.ts:17](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L17)

## Properties

### \_description

• `Private` **\_description**: `string`

#### Defined in

[structures/Language.ts:14](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L14)

___

### \_dictionary

• `Private` **\_dictionary**: [`LanguageDictionary`](../modules.md#languagedictionary)

#### Defined in

[structures/Language.ts:15](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L15)

___

### \_id

• **\_id**: \`${string}-${string}\`

#### Overrides

BaseStructure.\_id

#### Defined in

[structures/Language.ts:12](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L12)

## Accessors

### bot

• `get` **bot**(): `undefined` \| [`Bot`](Bot.md)

#### Returns

`undefined` \| [`Bot`](Bot.md)

#### Defined in

[internals/BaseStructure.ts:20](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseStructure.ts#L20)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[structures/Language.ts:37](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L37)

___

### dictionary

• `get` **dictionary**(): [`LanguageDictionary`](../modules.md#languagedictionary)

#### Returns

[`LanguageDictionary`](../modules.md#languagedictionary)

#### Defined in

[structures/Language.ts:40](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L40)

___

### id

• `get` **id**(): \`${string}-${string}\`

#### Returns

\`${string}-${string}\`

#### Defined in

[structures/Language.ts:33](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L33)

## Methods

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
