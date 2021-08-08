[senutila](docs/README.md) / Exports

# senutila

## Enumerations

- [ActivityTypes](enums/ActivityTypes.md)
- [ButtonStyles](enums/ButtonStyles.md)
- [GatewayReceiveOpcodes](enums/GatewayReceiveOpcodes.md)
- [GatewaySendOpcodes](enums/GatewaySendOpcodes.md)

## Classes

- [Bot](classes/Bot.md)
- [Button](classes/Button.md)
- [Category](classes/Category.md)
- [Command](classes/Command.md)
- [ComponentRow](classes/ComponentRow.md)
- [Embed](classes/Embed.md)
- [Language](classes/Language.md)
- [RawEventListener](classes/RawEventListener.md)
- [SelectMenu](classes/SelectMenu.md)

## Interfaces

- [Activity](interfaces/Activity.md)
- [ActivityButton](interfaces/ActivityButton.md)
- [GatewayIdentifyData](interfaces/GatewayIdentifyData.md)
- [OutgoingGatewayDispatchPayload](interfaces/OutgoingGatewayDispatchPayload.md)
- [Presence](interfaces/Presence.md)
- [RawLanguageDictionary](interfaces/RawLanguageDictionary.md)

## Type aliases

### ComponentRowComponent

Ƭ **ComponentRowComponent**: [`Button`](classes/Button.md) \| [`SelectMenu`](classes/SelectMenu.md)

#### Defined in

[typings/index.ts:34](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L34)

___

### EmojiPartial

Ƭ **EmojiPartial**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `animated?` | `boolean` |
| `id` | [`Snowflake`](modules.md#snowflake) |
| `name` | `string` |

#### Defined in

[typings/index.ts:44](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L44)

___

### InteractionHandler

Ƭ **InteractionHandler**: (`bot`: [`Bot`](classes/Bot.md), `interaction`: `Interaction`) => `Promise`<`any`\>

#### Type declaration

▸ (`bot`, `interaction`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](classes/Bot.md) |
| `interaction` | `Interaction` |

##### Returns

`Promise`<`any`\>

#### Defined in

[typings/index.ts:28](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L28)

___

### LanguageDictionary

Ƭ **LanguageDictionary**: `Collection`<`string`, [`LanguageDictionaryValue`](modules.md#languagedictionaryvalue)\>

#### Defined in

[typings/index.ts:16](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L16)

___

### LanguageDictionaryValue

Ƭ **LanguageDictionaryValue**: `string` \| (...`args`: `any`[]) => `string` \| `string`[] \| (`string` \| (...`args`: `any`[]) => `string`)[]

#### Defined in

[typings/index.ts:8](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L8)

___

### LanguageID

Ƭ **LanguageID**: \`${string}-${string}\`

#### Defined in

[typings/index.ts:6](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L6)

___

### LanguageKey

Ƭ **LanguageKey**: `string` \| [`string`, ...any]

#### Defined in

[typings/index.ts:18](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L18)

___

### RawEventHandler

Ƭ **RawEventHandler**: (`bot`: [`Bot`](classes/Bot.md), `event`: `any`) => `Promise`<`any`\>

#### Type declaration

▸ (`bot`, `event`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](classes/Bot.md) |
| `event` | `any` |

##### Returns

`Promise`<`any`\>

#### Defined in

[typings/index.ts:38](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L38)

___

### Snowflake

Ƭ **Snowflake**: `number`

#### Defined in

[typings/index.ts:36](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L36)

___

### TopLevelMessageComponent

Ƭ **TopLevelMessageComponent**: [`Button`](classes/Button.md) \| [`ComponentRow`](classes/ComponentRow.md)

#### Defined in

[typings/index.ts:33](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L33)

___

### URL

Ƭ **URL**: \`http${"s" \| ""}://${string}${\`.${string}${string}${"/" \| \`.${string}\` \| ""}\` \| ""}\`

#### Defined in

[typings/index.ts:40](https://github.com/edazpotato/senutila/blob/caba2d1/src/typings/index.ts#L40)

## Functions

### bot

▸ **bot**(...`args`): [`Bot`](classes/Bot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Bot`](classes/Bot.md)\> |

#### Returns

[`Bot`](classes/Bot.md)

#### Defined in

[structures/Bot.ts:467](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L467)

___

### button

▸ **button**(...`args`): [`Button`](classes/Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Button`](classes/Button.md)\> |

#### Returns

[`Button`](classes/Button.md)

#### Defined in

[structures/components/Button.ts:71](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/Button.ts#L71)

___

### category

▸ **category**(...`args`): [`Category`](classes/Category.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Category`](classes/Category.md)\> |

#### Returns

[`Category`](classes/Category.md)

#### Defined in

[structures/Category.ts:41](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Category.ts#L41)

___

### command

▸ **command**(...`args`): [`Command`](classes/Command.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Command`](classes/Command.md)\> |

#### Returns

[`Command`](classes/Command.md)

#### Defined in

[structures/Command.ts:43](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Command.ts#L43)

___

### componentRow

▸ **componentRow**(...`args`): [`ComponentRow`](classes/ComponentRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`ComponentRow`](classes/ComponentRow.md)\> |

#### Returns

[`ComponentRow`](classes/ComponentRow.md)

#### Defined in

[structures/components/ComponentRow.ts:37](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/ComponentRow.ts#L37)

___

### embed

▸ **embed**(...`args`): [`Embed`](classes/Embed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Embed`](classes/Embed.md)\> |

#### Returns

[`Embed`](classes/Embed.md)

#### Defined in

[structures/Embed.ts:7](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Embed.ts#L7)

___

### language

▸ **language**(...`args`): [`Language`](classes/Language.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`Language`](classes/Language.md)\> |

#### Returns

[`Language`](classes/Language.md)

#### Defined in

[structures/Language.ts:45](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Language.ts#L45)

___

### rawEventListener

▸ **rawEventListener**(...`args`): [`RawEventListener`](classes/RawEventListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`RawEventListener`](classes/RawEventListener.md)\> |

#### Returns

[`RawEventListener`](classes/RawEventListener.md)

#### Defined in

[structures/RawEventListener.ts:35](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L35)

___

### selectMenu

▸ **selectMenu**(...`args`): [`SelectMenu`](classes/SelectMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<typeof [`SelectMenu`](classes/SelectMenu.md)\> |

#### Returns

[`SelectMenu`](classes/SelectMenu.md)

#### Defined in

[structures/components/SelectMenu.ts:113](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/components/SelectMenu.ts#L113)
