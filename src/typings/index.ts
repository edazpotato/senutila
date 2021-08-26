import { Bot, Button, ComponentRow, SelectMenu } from "../structures/index";

import Collection from "@discordjs/collection";
import { Interaction } from "../internals/index";

export type LanguageID = `${string}-${string}`;

export type LanguageDictionaryValue =
	| string
	| string[]
	| ((...args: any[]) => string | string[]);

export interface RawLanguageDictionary {
	[key: string]: LanguageDictionaryValue;
}
export type LanguageDictionary = Collection<
	LanguageKey,
	LanguageDictionaryValue
>;

export type LanguageKey = string | [string, ...any];

export enum ButtonStyles {
	Primary = 1,
	Secondary = 2,
	Success = 3,
	Danger = 4,
	Link = 5,
}

export type InteractionHandler = (
	bot: Bot,
	interaction: Interaction
) => Promise<any>;

export type TopLevelMessageComponent = Button | ComponentRow;
export type ComponentRowComponent = Button | SelectMenu;

export type Snowflake = number;

export type RawEventHandler = (bot: Bot, event: any) => Promise<any>;

export type URL = `http${"s" | ""}://${string}${
	| `.${string}${string}${"/" | `.${string}` | ""}`
	| ""}`;

export type EmojiPartial = {
	name: string;
	id: Snowflake;
	animated?: boolean;
};

export interface ActivityButton {
	label: string;
	url: string;
}

export enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}

export interface Activity {
	name: string;
	type: ActivityTypes;
	url?: string;
}

export interface Presence {
	afk: boolean;
	status: "online" | "dnd" | "idle" | "invisible" | "offline";
	since?: number;
	activities: Activity[];
}

export enum GatewaySendOpcodes {
	Heartbeat = 1,
	Identify = 2,
	PresenceUpdate = 3,
	VoiceStateUpdate = 4,
	Resume = 6,
	RequestGuildMembers = 8,
}

export enum GatewayReceiveOpcodes {
	Dispatch = 0,
	Heartbeat = 1,
	Reconnect = 7,
	InvalidSession = 9,
	Hello = 10,
	HeartbeatACK = 11,
}

export interface OutgoingGatewayDispatchPayload {
	op: GatewayReceiveOpcodes | GatewaySendOpcodes;
	d?: any;
}

export interface GatewayIdentifyData {
	token: string;
	properties: {
		$os: string;
		$browser: string;
		$device: string;
	};
	compress?: boolean;
	large_threshold?: number;
	shard?: [shard_id: number, shard_count: number];
	presence?: Presence;
	intents: number;
}
