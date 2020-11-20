/** @format */

import { Tableau } from "../objects/Tableau";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Intro",
};

export class IntroScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
	}
	
    create() {
        new Tableau({
            scene: this,
            name: "kitchen",
            backgroundKey: "intro-scene-kitchen",
            text: [{ t: "hello..." }]
        });
    }

    update() {}
}
