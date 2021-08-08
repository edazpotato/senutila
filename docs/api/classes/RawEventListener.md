[senutila](../docs/README.md) / [Exports](../modules.md) / RawEventListener

# Class: RawEventListener

## Constructors

### constructor

• **new RawEventListener**(`event`, `handler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GatewayDispatchEvents` |
| `handler` | [`RawEventHandler`](../modules.md#raweventhandler) |

#### Defined in

[structures/RawEventListener.ts:10](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L10)

## Properties

### \_bot

• `Private` `Optional` **\_bot**: [`Bot`](Bot.md)

#### Defined in

[structures/RawEventListener.ts:6](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L6)

___

### \_event

• `Private` **\_event**: `GatewayDispatchEvents`

#### Defined in

[structures/RawEventListener.ts:7](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L7)

___

### \_handler

• `Private` **\_handler**: [`RawEventHandler`](../modules.md#raweventhandler)

#### Defined in

[structures/RawEventListener.ts:8](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L8)

## Accessors

### bot

• `get` **bot**(): `undefined` \| [`Bot`](Bot.md)

#### Returns

`undefined` \| [`Bot`](Bot.md)

#### Defined in

[structures/RawEventListener.ts:26](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L26)

___

### event

• `get` **event**(): `GatewayDispatchEvents`

#### Returns

`GatewayDispatchEvents`

#### Defined in

[structures/RawEventListener.ts:30](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L30)

## Methods

### handle

▸ **handle**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[structures/RawEventListener.ts:20](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L20)

___

### load

▸ **load**(`bot`): [`RawEventListener`](RawEventListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bot` | [`Bot`](Bot.md) |

#### Returns

[`RawEventListener`](RawEventListener.md)

#### Defined in

[structures/RawEventListener.ts:15](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/RawEventListener.ts#L15)
