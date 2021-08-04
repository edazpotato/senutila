import { Snowflake } from "../typings/index";
import centra from "centra";

export class APIClient {
	private __top_secret_TOKEN_dont_expose_this_please: string;
	constructor(token: string) {
		this.__top_secret_TOKEN_dont_expose_this_please = token;
	}

	authorisedRequest(url: string) {
		return centra(url).header(
			"Authorization",
			`Bot ${this.__top_secret_TOKEN_dont_expose_this_please}`
		);
	}

	application = {
		commands: {
			async post() {
				const request = this.authorisedRequest();
			},
		},
		guilds(guildID: Snowflake) {
			return {
				commands: {
					async post() {},
				},
			};
		},
	};
}
