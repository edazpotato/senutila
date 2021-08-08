[senutila](../docs/README.md) / [Exports](../modules.md) / Bot

# Class: Bot

## Constructors

### constructor

• **new Bot**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `BotOptions` |

#### Defined in

[structures/Bot.ts:74](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L74)

## Properties

### \_\_top\_secret\_TOKEN\_dont\_expose\_this\_please

• `Private` **\_\_top\_secret\_TOKEN\_dont\_expose\_this\_please**: `string`

#### Defined in

[structures/Bot.ts:29](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L29)

___

### \_categories

• `Private` **\_categories**: `Collection`<`string`, [`Category`](Category.md)\>

#### Defined in

[structures/Bot.ts:34](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L34)

___

### \_commands

• `Private` **\_commands**: `Collection`<`string`, [`Command`](Command.md)\>

#### Defined in

[structures/Bot.ts:35](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L35)

___

### \_defaultLanguage

• `Private` `Optional` **\_defaultLanguage**: \`${string}-${string}\`

#### Defined in

[structures/Bot.ts:33](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L33)

___

### \_inital\_presence

• `Private` `Optional` **\_inital\_presence**: [`Presence`](../interfaces/Presence.md)

#### Defined in

[structures/Bot.ts:30](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L30)

___

### \_intents

• `Private` **\_intents**: `number`

#### Defined in

[structures/Bot.ts:41](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L41)

___

### \_languages

• `Private` **\_languages**: `Collection`<\`${string}-${string}\`, [`Language`](Language.md)\>

#### Defined in

[structures/Bot.ts:32](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L32)

___

### \_rawEventListeners

• `Private` **\_rawEventListeners**: `Collection`<`GatewayDispatchEvents`, [`RawEventListener`](RawEventListener.md)[]\>

#### Defined in

[structures/Bot.ts:36](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L36)

___

### \_ws

• `Protected` `Optional` **\_ws**: `WebSocket`

#### Defined in

[structures/Bot.ts:43](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L43)

___

### api

• **api**: `REST`

#### Defined in

[structures/Bot.ts:56](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L56)

___

### apiVersion

• `Readonly` **apiVersion**: ``9``

#### Defined in

[structures/Bot.ts:58](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L58)

___

### gatewayCompression

• `Readonly` **gatewayCompression**: ``null`` \| ``"zlib-stream"`` = `null`

#### Defined in

[structures/Bot.ts:60](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L60)

___

### gatewayEncoding

• `Readonly` **gatewayEncoding**: ``"etf"`` \| ``"json"`` = `"json"`

#### Defined in

[structures/Bot.ts:59](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L59)

___

### gatewayRoot

• `Private` `Optional` **gatewayRoot**: `string`

#### Defined in

[structures/Bot.ts:61](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L61)

___

### inflate

• `Private` **inflate**: `Inflate`

#### Defined in

[structures/Bot.ts:51](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L51)

___

### lastWebSocketHeartbeatReceivedAcknolegement

• `Private` `Optional` **lastWebSocketHeartbeatReceivedAcknolegement**: `boolean`

#### Defined in

[structures/Bot.ts:46](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L46)

___

### resumingWebSocketConnection

• `Private` **resumingWebSocketConnection**: `boolean` = `false`

#### Defined in

[structures/Bot.ts:49](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L49)

___

### webSocketHeartbeatInterval

• `Private` `Optional` **webSocketHeartbeatInterval**: `number`

#### Defined in

[structures/Bot.ts:44](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L44)

___

### webSocketHeartbeatTimeout

• `Private` `Optional` **webSocketHeartbeatTimeout**: `Timeout`

#### Defined in

[structures/Bot.ts:45](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L45)

___

### webSocketSequenceNumber

• `Private` **webSocketSequenceNumber**: `number` = `-1`

#### Defined in

[structures/Bot.ts:47](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L47)

___

### webSocketSessionID

• `Private` `Optional` **webSocketSessionID**: `string`

#### Defined in

[structures/Bot.ts:48](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L48)

## Accessors

### categories

• `get` **categories**(): `Collection`<`string`, [`Category`](Category.md)\>

#### Returns

`Collection`<`string`, [`Category`](Category.md)\>

#### Defined in

[structures/Bot.ts:462](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L462)

___

### gatewayAddress

• `Private` `get` **gatewayAddress**(): `string`

#### Returns

`string`

#### Defined in

[structures/Bot.ts:62](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L62)

## Methods

### addCommands

▸ **addCommands**(`thingsToRegister`): [`Bot`](Bot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thingsToRegister` | ([`Category`](Category.md) \| [`Command`](Command.md))[] |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:131](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L131)

___

### addRawEventListeners

▸ **addRawEventListeners**(`listeners`): [`Bot`](Bot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listeners` | [`RawEventListener`](RawEventListener.md)[] |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:176](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L176)

___

### checkThatEverythingHasBeenSetProperly

▸ **checkThatEverythingHasBeenSetProperly**(): [`Bot`](Bot.md)

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:96](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L96)

___

### connect

▸ `Private` **connect**(`bot`, `resume?`): [`Bot`](Bot.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bot` | [`Bot`](Bot.md) | `undefined` |
| `resume` | `boolean` | `false` |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:400](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L400)

___

### handleWebSocketEventDispatch

▸ `Private` **handleWebSocketEventDispatch**(`eventName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `GatewayDispatchEvents` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[structures/Bot.ts:379](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L379)

___

### handleWebSocketMessage

▸ `Private` **handleWebSocketMessage**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.data` | `Buffer` |
| `__namedParameters.target` | `WebSocket` |
| `__namedParameters.type` | `string` |

#### Returns

`void`

#### Defined in

[structures/Bot.ts:271](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L271)

___

### registerLanguages

▸ **registerLanguages**(`languages`): [`Bot`](Bot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `languages` | [`Language`](Language.md)[] |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:118](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L118)

___

### resumeWebSocketConnection

▸ `Private` **resumeWebSocketConnection**(): `void`

#### Returns

`void`

#### Defined in

[structures/Bot.ts:212](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L212)

___

### sendWebSocketHeartbeat

▸ `Private` **sendWebSocketHeartbeat**(`bot`, `schedule?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bot` | [`Bot`](Bot.md) | `undefined` |
| `schedule` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[structures/Bot.ts:228](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L228)

___

### sendWebSocketIdentify

▸ `Private` **sendWebSocketIdentify**(): `void`

#### Returns

`void`

#### Defined in

[structures/Bot.ts:255](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L255)

___

### sendWebSocketMessage

▸ `Private` **sendWebSocketMessage**(`opcode`, `payload?`, `callback?`): ``false`` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opcode` | [`GatewaySendOpcodes`](../enums/GatewaySendOpcodes.md) |
| `payload?` | `any` |
| `callback?` | (`err?`: `Error`) => `void` |

#### Returns

``false`` \| `void`

#### Defined in

[structures/Bot.ts:194](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L194)

___

### setDefaultLanguage

▸ **setDefaultLanguage**(`language`): [`Bot`](Bot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | \`${string}-${string}\` |

#### Returns

[`Bot`](Bot.md)

#### Defined in

[structures/Bot.ts:108](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L108)

___

### start

▸ **start**(): `Promise`<[`Bot`](Bot.md)\>

#### Returns

`Promise`<[`Bot`](Bot.md)\>

#### Defined in

[structures/Bot.ts:431](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L431)

___

### terminateWebSocketConnection

▸ `Private` **terminateWebSocketConnection**(): `void`

#### Returns

`void`

#### Defined in

[structures/Bot.ts:187](https://github.com/edazpotato/senutila/blob/caba2d1/src/structures/Bot.ts#L187)
