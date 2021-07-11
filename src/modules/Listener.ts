import { BaseModule, Bot } from "../structures/index";

type ListenerExecutor = (event: any, bot: Bot) => Promise<any>;

export default class Listener extends BaseModule {
	executer: ListenerExecutor;

	constructor(id: string, executer: ListenerExecutor) {
		super(id);
		this.executer = executer;
	}
}
