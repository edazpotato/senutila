import chalk from "chalk";

export default class Logger {
	log(msg: string): void {
		this.debug(msg);
	}
	debug(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgWhite(
				"DEBUG"
			)} ${chalk.dim(msg)}`
		);
	}

	info(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgCyan(
				"INFO"
			)} ${chalk.blue(msg)}`
		);
	}

	success(msg: string): void {
		console.info(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgGreen(
				"SUCCESS"
			)} ${chalk.green(msg)}`
		);
	}

	warning(msg: string): void {
		console.warn(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgYellow(
				"WARN"
			)} ${chalk.blue(msg)}`
		);
	}

	error(msg: string): void {
		console.warn(
			`[${chalk.bgMagenta(new Date().toLocaleString())}] ${chalk.bgRed(
				"ERR"
			)} ${chalk.red(msg)}`
		);
	}
}
