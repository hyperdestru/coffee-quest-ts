/** @format */

import { uuidv4 } from "uuid";

export class Character {
    private readonly id: number;
    private scene: Phaser.Scene;
    private name: string;
    private image: Phaser.GameObjects.Image;
    private voice: Phaser.Sound.BaseSound;
    private coords: any;

    constructor(params: {
        scene: Phaser.Scene;
        name: string;
        textureKey: string;
        voiceKey: string;
        coords: { x: number; y: number };
    }) {
        this.id = uuidv4();
        this.scene = params.scene;
        this.name = params.name;
		this.coords = params.coords;
		
        this.image = this.scene.add.image(
            this.coords.x,
            this.coords.y,
            params.textureKey
        );
    }
}
