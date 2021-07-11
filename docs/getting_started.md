# Getting started with Senutila

First install nodejs (and npm) version 14 or higher and add it to the path.
Then install [pnpm](https://pnpm.io/):

```bash
npm i -g pnpm
```

Now create a project and install dependencies:

```bash
mkdir learn-senutila
cd learn-senutila
pnpm init -y
pnpm i senutila typescript sqlite3 sqlite
pnpx tsc --init
```

Okay, now it's time to do coding.
make a file called `index.ts` and stick the following in it:

```ts
import { Bot } from "senutila";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

open({
	filename: "./database.db",
	driver: sqlite3.Database,
}).then((db) => {
	const bot = new Bot({
		database: {
			guild: {
				table: "guilds",
				idColumn: "id",
				languageColumn: "lang",
				prefixColumn: "prefix",
			},
			user: {
				table: "users",
				idColumn: "id",
				languageColumn: "language",
			},
			getValue: async (table, id, column) => {
				const res = await db.get(
					`SELECT ${column} FROM ${table} WHERE id = ${id}`
				);
				return res[column];
			},
			setValue: async (table, id, column, value) => {
				const res = await db.run(`sql here`);
				return true;
			},
		},
		languages: {
			default: "en-GB",
			directory: "./languages",
		},
		commands: {
			textPrefix: "!",
			directory: "./commands",
		},
		listeners: {
			directory: "./listeners",
		},
	});

	bot.start("your token here");
});
```

Replace the string in `bot.start()` with your bot token.
We have some directories listed in the options, so lets make some files for those.

First lets create a listener for when the bot becomes ready. Create the file `listeners/ready.ts` and put this in it:

```ts
import { Listener } from "senutila";
export default new Listener("ready", async (event, bot) => {
	bot.logger.success("Successfully connected to Discord.");
});
```

This listens for the `ready` event (emitted when the bot/shard is fully loaded and has connected to Discord) and logs a success message using the bot's built in logger.

Okay, before we can make a command we need to create some strings. Senutila requires bots to be localisable.
Create the file `languages/en-GB.ts` and put this in it:

```ts
import { Language } from "senutila";
export default new Language("en-GB", (bot) => ({
	PING_COMMAND_RESPONSE_TEXT: "Pong!",
	PING_COMMAND_DESCRIPTION: "Says pong to you!",
}));
```

It's important that the language `en-GB` exists (in this specific bot) because in the we set `en-GB` as the default language in the bot configuration.

Now lets create a command! Create the file `commands/ping.ts` and put this in it:

```ts
import { Command } from "senutila";
export default new Command(
	"ping",
	{ description: "PING_COMMAND_DESCRIPTION" },
	async (event, args, bot) => {
		return event.reply("PING_COMMAND_RESPONSE_TEXT");
	}
);
```

Note how the strings being used are keys in the language defined above.

Now build your bot:

```bash
pnpx tsc
```

and then run it

```bash
node index.js
```

🎉 You just made a bot, with built-in localisation support, and slash commands.
