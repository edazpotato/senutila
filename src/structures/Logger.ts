import chalk from "chalk";

export default class Logger {
	static log(msg: string): void {
		Logger.debug(msg);
	}
	static debug(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgWhite(
				"DEBUG"
			)} ${chalk.dim(msg)}`
		);
	}

	static info(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgCyan(
				"INFO"
			)} ${chalk.blue(msg)}`
		);
	}

	static success(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgGreen(
				"SUCCESS"
			)} ${chalk.green(msg)}`
		);
	}

	static warning(msg: string): void {
		console.warn(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgYellow(
				"WARN"
			)} ${chalk.blue(msg)}`
		);
	}

	static error(msg: string): void {
		console.warn(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgRed(
				"ERR"
			)} ${chalk.red(msg)}`
		);
	}
}
