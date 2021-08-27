import { APIUser } from "discord-api-types/v9";
import { Bot } from "../index";
import { Snowflake } from "../typings/index";

export class User {
	public bot: Bot;

	readonly id: Snowflake;
	readonly username: string;
	readonly discriminator: string;
	readonly avatarHash: string | null;
	readonly defaultAvatarNumber: number;
	readonly avatarURL: string | null;

	readonly flags: number;

	// readonly DiscordEmployee: boolean;
	// readonly PartneredServerOwner: boolean;
	// readonly HypeSquadEvents: boolean;
	// readonly BugHunterLevel1: boolean;
	// readonly BugHunterLevel2: boolean;
	// readonly EarlySupporter: boolean;
	// readonly TeamUser: boolean;
	// readonly VerifiedBot: boolean;
	// readonly EarlyVerifiedBotDeveloper: boolean;
	// readonly DiscordCertifiedModerator: boolean;

	constructor(bot: Bot, data: APIUser) {
		this.bot = bot;

		this.id = data.id;
		this.username = data.username;
		this.discriminator = data.discriminator;
		this.avatarHash = data.avatar;
		this.defaultAvatarNumber = Number(this.discriminator) % 5;
		this.avatarURL = this.avatarHash
			? bot.api.cdn.userAvatar(this.id, this.avatarHash)
			: null;
		this.flags = data.flags || 0;

		// this.DiscordEmployee = this.flags >>
	}
}
