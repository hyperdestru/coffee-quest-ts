/** @format */

import { Tilemap } from "../objects/Tilemap";
import { Pawn } from "../objects/Pawn";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Overworld",
};

export class OverworldScene extends Phaser.Scene {
    private musicTheme: Phaser.Sound.BaseSound;
    private tilemap: Tilemap;
    private pawn: Pawn;

    constructor() {
        super(sceneConfig);
    }

    create() {
        this.musicTheme = this.sound.add("overworldTheme");
        this.musicTheme.play();
        this.tilemap = new Tilemap({ scene: this });
        this.pawn = new Pawn({
            scene: this,
            col: 4,
            line: 0,
            textureKey: "overworldHero",
            tilemap: this.tilemap,
        });
    }
}
