import { Bot, Button, ComponentRow, SelectMenu } from "../structures/index";

import Collection from "@discordjs/collection";
import { Interaction } from "../internals/index";

export type LanguageID = `${string}-${string}`;

export type LanguageDictionaryValue =
	| string
	| ((...args: any[]) => string | string[])
	| (string | ((...args: any[]) => string))[];

export interface RawLanguageDictionary {
	[key: string]: LanguageDictionaryValue;
}
export type LanguageDictionary = Collection<string, LanguageDictionaryValue>;

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

export type Snowflake = string;

export type RawEventHandler = (bot: Bot, event: any) => Promise<any>;

export type URL = `http${"s" | ""}://${string}${
	| `.${string}${string}${"/" | `.${string}` | ""}`
	| ""}`;

export type EmojiPartial = {
	name: string;
	id: Snowflake;
	animated?: boolean;
};
