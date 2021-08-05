import { Bot, Button, ComponentRow, SelectMenu } from "../structures/index";

import { Interaction } from "../internals/index";

export type LanguageID = `${string}-${string}`;

export type LanguageDictionaryValue =
	| string
	| ((...args: any[]) => string | string[])
	| (string | ((...args: any[]) => string))[];

export interface RawLanguageDictionary {
	[key: string]: LanguageDictionaryValue;
}
export type LanguageDictionary = Map<string, LanguageDictionaryValue>;

export type LanguageKey = string | [string, ...any];

export type ButtonStyle =
	| "PRIMARY"
	| "SECONDARY"
	| "SUCCESS"
	| "DANGER"
	| "LINK";

export type InteractionHandler = (
	bot: Bot,
	interaction: Interaction
) => Promise<any>;

export type TopLevelMessageComponent = Button | ComponentRow;
export type ComponentRowComponent = Button | SelectMenu;

export type Snowflake = string;

export type RawEventHandler = (bot: Bot, event: any) => Promise<any>;
