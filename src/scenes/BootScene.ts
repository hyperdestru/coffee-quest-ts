/** @format */

import { getGameWidth, getGameHeight, COLORS } from "../helpers";
import { LoadingBar } from "../objects/LoadingBar";
import { MainBtn } from "../prefabs/MainBtn";

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
		
        new MainBtn({
			scene: this,
			x: 400,
			y: getGameHeight(this)-100,
			width: 150,
			height: 35,
			color: COLORS.customRed.hex,
			text: "START",
            newSceneKey: "Intro",
            sceneData: this.data.getAll(),
		});
    }
}
