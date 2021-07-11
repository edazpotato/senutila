import { Bot } from "senutila";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

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
