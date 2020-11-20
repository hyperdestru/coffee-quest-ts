/** @format */

import { getGameWidth, getGameHeight } from "../helpers";
import { Gui } from "../objects/Gui";
import { LoadingBar } from "../objects/LoadingBar";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

export class BootScene extends Phaser.Scene {
    private logo: Phaser.GameObjects.Image;
    private musicTheme: Phaser.Sound.BaseSound;
    private loadingBar: LoadingBar;

    constructor() {
        super(sceneConfig);
    }

    preload() {
		this.load.pack("preload", "assets/pack.json", "preload");

        this.loadingBar = new LoadingBar({ scene: this });

        this.load.on("progress", (value) => {
			this.loadingBar.draw(value);
			this.loadingBar.progressText.setText((Math.floor(value*100)) + "%");
		});
		
        this.load.on("complete", () => {
			this.loadingBar.destroy();
		});
    }

    create() {
        this.musicTheme = this.sound.add("bootTheme");
        this.musicTheme.play();

        this.logo = this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2.5,
            "bootLogo"
		);
		
        Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Intro",
            sceneData: this.data.getAll(),
        });
    }
}
