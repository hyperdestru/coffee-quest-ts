/** @format */

import { getGameWidth, getGameHeight, COLORS, FONT_SIZES } from "../helpers";
import { LoadingBar } from "../objects/LoadingBar";
import { SceneStartButton } from "../prefabs/SceneStartButton";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

export class BootScene extends Phaser.Scene {
    private logo: Phaser.GameObjects.Image;
    private musicTheme: Phaser.Sound.BaseSound;
    private loadingBar: LoadingBar;
    private mainBtn: SceneStartButton;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.pack("preload", "assets/pack.json", "preload");

        this.loadingBar = new LoadingBar({ scene: this });

        this.load.on("progress", (value) => {
            this.loadingBar.draw(value);
            this.loadingBar.progressText.setText(Math.floor(value * 100) + "%");
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

        this.mainBtn = new SceneStartButton({
            scene: this,
            x: getGameWidth(this) / 2,
            y: getGameHeight(this) - 100,
            width: 150,
            height: 35,
            color: COLORS.customRed.hex,
            hoverColor: COLORS.customYellow.hex,
            alpha: 1,
            label: "START",
            fontSize: FONT_SIZES.xlarge,
            fontColor: COLORS.black.string,
            newSceneKey: "Intro100",
        });
    }
}
