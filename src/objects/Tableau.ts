/** @format */

import { Character } from "./Character";
import { v4 as uuidv4 } from "uuid";
import { getGameHeight, getGameWidth } from "../helpers";

export class Tableau {
    private readonly id: number;
	private scene: Phaser.Scene;
    private name: string;
    private characters: Array<Character>;
    private theme: Phaser.Sound.BaseSound;
    private background: Phaser.GameObjects.Image;
    private _text: Array<string>;
	
	get text(): Array<string> {
		return this._text;
	}

	destroy(): void {
		this.background.destroy();
	}

    constructor(params: {
        scene: Phaser.Scene;
        name: string;
        backgroundKey: string;
        text?: Array<string>;
        themeKey?: string;
        characters?: Array<Character>;
    }) {
        this.id = uuidv4();
        this.scene = params.scene;
        this.name = params.name;
        this.characters = params.characters;
        this._text = params.text;

		this.background = this.scene.add.image(
			getGameWidth(this.scene)/2, 
			getGameHeight(this.scene)/2, 
			params.backgroundKey
		);

		if (params.themeKey) {
			this.theme = this.scene.sound.add(params.themeKey);
		}
    }
}
