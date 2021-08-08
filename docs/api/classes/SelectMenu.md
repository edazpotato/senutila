[senutila](../docs/README.md) / [Exports](../modules.md) / SelectMenu

# Class: SelectMenu

## Hierarchy

- `BaseComponent`

  ↳ **`SelectMenu`**

## Constructors

### constructor

• **new SelectMenu**(`args`, `handler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.maxOptions` | `number` |
| `args.minOptions` | `number` |
| `args.options` | `SelectMenuOptions` |
| `args.placeholder` | [`LanguageKey`](../modules.md#languagekey) |
| `handler` | [`InteractionHandler`](../modules.md#interactionhandler) |

#### Overrides

BaseComponent.constructor

#### Defined in

[structures/components/SelectMenu.ts:54](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L54)

## Properties

### \_handler

• `Protected` `Optional` **\_handler**: [`InteractionHandler`](../modules.md#interactionhandler)

#### Inherited from

BaseComponent.\_handler

#### Defined in

[internals/BaseComponent.ts:4](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseComponent.ts#L4)

___

### \_id

• `Protected` **\_id**: `string`

#### Inherited from

BaseComponent.\_id

#### Defined in

[internals/BaseComponent.ts:5](https://github.com/edazpotato/senutila/blob/caba2d1/src/internals/BaseComponent.ts#L5)

___

### \_maxOptions

• `Private` **\_maxOptions**: `number`

#### Defined in

[structures/components/SelectMenu.ts:51](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L51)

___

### \_minOptions

• `Private` **\_minOptions**: `number`

#### Defined in

[structures/components/SelectMenu.ts:50](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L50)

___

### \_options

• `Private` **\_options**: `SelectMenuOptions`

#### Defined in

[structures/components/SelectMenu.ts:49](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L49)

___

### \_placeholder

• `Private` **\_placeholder**: [`LanguageKey`](../modules.md#languagekey)

#### Defined in

[structures/components/SelectMenu.ts:52](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L52)

___

### ComponentType

▪ `Static` **ComponentType**: `number` = `3`

#### Defined in

[structures/components/SelectMenu.ts:47](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L47)

## Accessors

### maxOptions

• `get` **maxOptions**(): `number`

#### Returns

`number`

#### Defined in

[structures/components/SelectMenu.ts:108](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L108)

___

### minOptions

• `get` **minOptions**(): `number`

#### Returns

`number`

#### Defined in

[structures/components/SelectMenu.ts:104](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L104)

___

### options

• `get` **options**(): `SelectMenuOptions`

#### Returns

`SelectMenuOptions`

#### Defined in

[structures/components/SelectMenu.ts:100](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L100)

___

### placeholderKey

• `get` **placeholderKey**(): [`LanguageKey`](../modules.md#languagekey)

#### Returns

[`LanguageKey`](../modules.md#languagekey)

#### Defined in

[structures/components/SelectMenu.ts:96](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L96)

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `custom_id` | `string` |
| `max_values` | `number` |
| `min_values` | `number` |
| `options` | (``null`` \| { `description`: [`LanguageKey`](../modules.md#languagekey) ; `emoji`: `undefined` \| { `id`: `number` ; `name`: `string`  } ; `label`: [`LanguageKey`](../modules.md#languagekey) ; `value`: `string`  })[] |
| `placeholder` | [`LanguageKey`](../modules.md#languagekey) |
| `type` | `number` |

#### Overrides

BaseComponent.serialize

#### Defined in

[structures/components/SelectMenu.ts:70](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L70)
