/** @format */

import { Character } from "./Character";

export class Room {
    private name: string;
    private characters: Character[];
    private theme: Phaser.Sound.BaseSound;
    private background: Phaser.GameObjects.Image;

    constructor(params: {
        name: string;
        theme: Phaser.Sound.BaseSound;
        background: Phaser.GameObjects.Image;
    }) {
        this.name = params.name;
        this.theme = params.theme;
        this.background = params.background;
    }

    draw() {
        // ...
    }
}
