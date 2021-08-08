[senutila](../docs/README.md) / [Exports](../modules.md) / Button

# Class: Button

## Hierarchy

- `BaseComponent`

  ↳ **`Button`**

## Constructors

### constructor

• **new Button**(`args`, `handler?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.disabled?` | `boolean` |
| `args.emoji?` | [`EmojiPartial`](../modules.md#emojipartial) |
| `args.label` | [`LanguageKey`](../modules.md#languagekey) |
| `args.style` | [`ButtonStyles`](../enums/ButtonStyles.md) |
| `args.url?` | \`http://${string}\` \| \`http://${string}.${string}${string}\` \| \`http://${string}.${string}${string}/\` \| \`http://${string}.${string}${string}.${string}\` \| \`https://${string}\` \| \`https://${string}.${string}${string}\` \| \`https://${string}.${string}${string}/\` \| \`https://${string}.${string}${string}.${string}\` |
| `handler?` | [`InteractionHandler`](../modules.md#interactionhandler) |

#### Overrides

BaseComponent.constructor

#### Defined in

[structures/components/Button.ts:20](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L20)

## Properties

### \_disabled

• `Private` `Optional` **\_disabled**: `boolean`

#### Defined in

[structures/components/Button.ts:18](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L18)

___

### \_emoji

• `Private` `Optional` **\_emoji**: [`EmojiPartial`](../modules.md#emojipartial)

#### Defined in

[structures/components/Button.ts:17](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L17)

___

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

### \_label

• `Private` **\_label**: [`LanguageKey`](../modules.md#languagekey)

#### Defined in

[structures/components/Button.ts:14](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L14)

___

### \_style

• `Private` **\_style**: [`ButtonStyles`](../enums/ButtonStyles.md)

#### Defined in

[structures/components/Button.ts:15](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L15)

___

### \_url

• `Private` `Optional` **\_url**: \`http://${string}\` \| \`http://${string}.${string}${string}\` \| \`http://${string}.${string}${string}/\` \| \`http://${string}.${string}${string}.${string}\` \| \`https://${string}\` \| \`https://${string}.${string}${string}\` \| \`https://${string}.${string}${string}/\` \| \`https://${string}.${string}${string}.${string}\`

#### Defined in

[structures/components/Button.ts:16](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L16)

___

### ComponentType

▪ `Static` **ComponentType**: `number` = `2`

#### Defined in

[structures/components/Button.ts:12](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L12)

## Accessors

### label

• `get` **label**(): [`LanguageKey`](../modules.md#languagekey)

#### Returns

[`LanguageKey`](../modules.md#languagekey)

#### Defined in

[structures/components/Button.ts:62](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L62)

___

### style

• `get` **style**(): [`ButtonStyles`](../enums/ButtonStyles.md)

#### Returns

[`ButtonStyles`](../enums/ButtonStyles.md)

#### Defined in

[structures/components/Button.ts:66](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L66)

___

### url

• `get` **url**(): `undefined` \| \`http://${string}\` \| \`http://${string}.${string}${string}\` \| \`http://${string}.${string}${string}/\` \| \`http://${string}.${string}${string}.${string}\` \| \`https://${string}\` \| \`https://${string}.${string}${string}\` \| \`https://${string}.${string}${string}/\` \| \`https://${string}.${string}${string}.${string}\`

#### Returns

`undefined` \| \`http://${string}\` \| \`http://${string}.${string}${string}\` \| \`http://${string}.${string}${string}/\` \| \`http://${string}.${string}${string}.${string}\` \| \`https://${string}\` \| \`https://${string}.${string}${string}\` \| \`https://${string}.${string}${string}/\` \| \`https://${string}.${string}${string}.${string}\`

#### Defined in

[structures/components/Button.ts:58](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L58)

## Methods

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Overrides

BaseComponent.serialize

#### Defined in

[structures/components/Button.ts:38](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L38)
