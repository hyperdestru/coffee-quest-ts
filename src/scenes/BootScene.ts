/** @format */

import { getGameWidth, getGameHeight } from "../helpers";
import { Gui } from "../objects/Gui";
import { LoadingBar } from "../objects/LoadingBar";
import { parsedStorage } from "../storage";

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

        this.loadingBar = new LoadingBar({ scene: this });

        this.load.on("progress", (value) => {
			console.log("progress value : ", value);
			this.loadingBar.draw(value);
			this.loadingBar.progressText.setText(`${value*100}%`);
        });
        this.load.on("fileprogress", (file) => {
            console.log("loaded file : ", file.src);
        });
        this.load.on("complete", () => {
			console.log("complete");
			this.loadingBar.destroy();
		});
		
        this.load.pack("preload", "assets/pack.json", "preload");
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
            newSceneKey: "Overworld",
            sceneData: this.data.getAll(),
        });
    }
}
