# senutila

Better than Discord.JS

## Example usage

```ts
// index.ts
import { Bot } from "senutila";
const bot = Bot({
	database: {},
	languages: {
		default: "en-GB", // If a key isn't found in the currently selected language, the bot will fall back to this one. It's also the one enabled by defualt.
		directory: "./languages",
		guildLanguageColumnName: "lang",
		userLanguageColumnName: "language",
	},
	commands: {
		directory: "./commands",
		text: {
			// Only set this property if you ant to enable non-slash commands.
			prefix: "!", // @BotName <command> will also work
			guildPrefixColumnName: "prefix", // Only set if you want to support custom per-guild prefixes. If a guild sets a custom prefix, the one set above will be disabled in that guild.
		},
	},
	events: {
		directory: "./listeners", // Discord events should be all caps, custom bot events will be camelCase.
	},
});

bot.start("token"); // Will use sharding automatically if necessary for the number of guilds that the bot is in

// languages/en-GB.ts
import { Language } from "senutila";
export default Language((bot) => ({
	MY_LANGUAGE_KEYS: "Go in here",
	COMPUTED_STRING: (whatever: string, props: number) =>
		`${whatever} ${props} you want`,
	A_RANDOM_ITEM: [
		"will",
		"be",
		"chosen",
		"from",
		"this",
		"array",
		"each",
		"time",
		"this",
		"key",
		"is",
		"used",
	],
	PING_COMMAND_RESPONSE_TEXT: "Pong!",
	PING_COMMAND_RESPONSE_WHEN_IP_ARGUMENT_IS_SET: (time: number) =>
		`Pong! Took ${time}ms.`,
	PING_COMMAND_DESCRIPTION:
		"It says pong back to you, or pings an ip adress!",
	PING_COMMAND_ARGUMENT_IP_DESCRIPTION: "The IP address to ping",
}));

// commands/ping.ts
import { Command } from "senutila";
export default Command(
	{
		description: "PING_COMMAND_DESCRIPTION", // Language key. Default language is used for slash commands
		aliases: ["pinnggg"], // Array of aliases, or a function that returns an array of aliases. Only used when invoked as a non-slash command
		slash: {
			global: true, // defaults to true. Set to false if you want to limit it to specific guilds, or disable it as a slash command entirely.
			guilds: ["713212880316792882"], // Array of guild IDs, or a function that returns an array of guild IDs. This is optional, and pointless if you have it enabled globaly.
		},
		arguments: [
			{
				name: "ip",
				description: "PING_COMMAND_ARGUMENT_IP_DESCRIPTION", // Language key. Default language is used for slash commands
				required: false, // true by default
				type: "string", // string or integer or boolean or user or channel or role or mentionable
			},
		],
	},
	(event, args, bot) => {
		if (args.ip) {
			const res = someNetworkingLibrary.pingIpAddress(args.ip);
			return event.reply(
				[
					"PING_COMMAND_RESPONSE_WHEN_IP_ARGUMENT_IS_SET",
					res.timeThatPingTookInMilliseconds,
				],
				{
					ephemeral: !!event.interaction, // Ephemeral responses are only available when responding to a interaction
				}
			); // Inline reply. Note that all items in the array after the first item are passed to the function of the language key as paremeters (if it is a function, otherwise they're ingnored)
		} else {
			return event.reply("PING_COMMAND_RESPONSE_TEXT", {
				ephemeral: !!event.interaction,
			});
		}
	}
);

// listeners/ready.ts (bot event)
import { Event } from "senutila";
export default Event((event, bot) => {
	bot.logger.success("Successfully connected to Discord.");
});
// listeners/MESSAGE_CREATE.ts
import { Event } from "senutila";
export default Event((event, bot) => {
	bot.logger.info(
		`Message received from ${event.data.author.username}#${event.data.author.discriminator}: ${event.data.content}`
	);
});
```

## Developing the library

### Dependencies...

...are handled with [pnpm](https://pnpm.io/), which is used the same way as normal npm (except with a p at the start of comamnds), it's just faster and more efficient with storage space.

To install it, use `npm i -g pnpm` and then use npm commands as normal (with a prepended p)
E.g.

```bash
pnpm install
pnpm i -D @types/node
pnpm un @types/node
pnpm run start
pnpm publish
```

### Scripts

```bash
# With Node.JS 14+ installed...
npm i -g pnpm # You need to use pnpm because otherwise the lockfiles will mess up
pnpm install
pnpm run build # Build once
pnpm run dev # Automaticaly rebuild when file changes are detected
```
