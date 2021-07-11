import BaseModule from "./BaseModule";
import Bot from "./Bot";
import { DirectoryPath } from "../types/index";
import fs from "fs";
import path from "path";

export default class ModuleHandler {
	modules: Map<string, BaseModule>;
	private _directory: DirectoryPath;
	bot: Bot;

	constructor(bot: Bot, directory: DirectoryPath) {
		this.bot = bot;
		this._directory = directory;
		this.modules = new Map();
		this.loadAll();
	}

	onLoad() {}

	async load(modulePath: string, reload: boolean = false): Promise<boolean> {
		let id = path.basename(modulePath).slice(0, -3); // Remove the .js
		if (reload) {
			if (this.modules.has(id)) this.modules.delete(id);
		}
		try {
			const module = (await import(modulePath)) as BaseModule;
			id = module.id;
			this.modules.set(id, module);
			return true;
		} catch {
			return false;
		}
	}

	async reload(modulePath: string): Promise<boolean> {
		return await this.load(modulePath, true);
	}

	async loadAll(reload: boolean = false): Promise<void> {
		const paths = ModuleHandler.readDirectoryRecursive(this._directory);
		for (const pathString of paths) {
			await this.load(path.resolve(pathString), reload);
		}
	}

	async reloadAll(): Promise<void> {
		await this.loadAll(true);
	}

	static readDirectoryRecursive(
		directoryToRead: DirectoryPath
	): DirectoryPath[] {
		const result: DirectoryPath[] = [];

		(function read(dir: DirectoryPath) {
			const files = fs.readdirSync(dir);

			for (const file of files) {
				const filepath = path.join(dir, file) as DirectoryPath;

				if (fs.statSync(filepath).isDirectory()) {
					read(filepath as DirectoryPath);
				} else {
					result.push(filepath);
				}
			}
		})(directoryToRead);

		return result;
	}

	get directory(): DirectoryPath {
		return this._directory;
	}
}
