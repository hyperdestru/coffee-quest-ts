/** @format */

export class Hero {
	private _name: string;
	private _money: number;
	private _lastPlayedScene: Phaser.Scene;

	get name(): string {
		return this._name;
	}

	get money(): number {
		return this._money;
	}

	get lastPlayedScene(): Phaser.Scene {
		return this._lastPlayedScene;
	}

	set lastPlayedScene(s: Phaser.Scene) {
		this._lastPlayedScene = s;
	}

	public earnSmallMoney(): void {
		this._money += 10;
	}

	public earnBigMoney(): void {
		this._money += 100;
	}

	public resetMoney(): void {
		this._money = 0;
	}

	public isRich(): true|false {
		if (this._money >= 100000) {
			return true;
		} else {
			return false;
		}
	}

	constructor() {
		this._name = "magnus"
		this.resetMoney();
	}
}
