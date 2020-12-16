/** @format */

import { COLORS, DEFAULT_FONT_FAMILIES, FONT_SIZES } from "../helpers";

export class SceneStartButton {
    private scene: Phaser.Scene;
    private box: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: number;
    private hoverColor: number;
    private fontSize: string;
    private fontColor: string;
    private label: string;
    private alpha: number;
    private newSceneKey: string;
    private sceneData: any;

    destroyBoxAndText(): void {
        this.box.destroy();
        this.text.destroy();
    }

    constructor(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        width: number;
        height: number;
        color: number;
        hoverColor: number;
        label: string;
        fontSize: string;
        fontColor: string;
        alpha: number;
        newSceneKey: string;
        sceneData?: any;
    }) {
        this.scene = params.scene;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.color = params.color;
        this.hoverColor = params.hoverColor;
        this.label = params.label;
        this.fontSize = params.fontSize;
        this.fontColor = params.fontColor;
        this.alpha = params.alpha;
        this.newSceneKey = params.newSceneKey;

        if (params.sceneData) {
            this.sceneData = params.sceneData;
        } else {
            this.sceneData = null;
        }

        this.box = new Phaser.GameObjects.Rectangle(
            this.scene,
            this.x,
            this.y,
            this.width,
            this.height,
            this.color,
            this.alpha
        );

        this.box.setInteractive();

        this.box.on(
            "pointerdown",
            () => {
                this.scene.sound.stopAll();

                this.scene.cameras.main.fadeOut(1000, 0, 0, 0);

                this.scene.cameras.main.once(
                    Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                    () => {
                        this.scene.scene.start(
                            this.newSceneKey,
                            this.sceneData
                        );
                    }
                );
            },
            this.scene
        );

        this.box.on("pointerover", () => {
            this.box.fillColor = this.hoverColor;
        });

        this.box.on("pointerout", () => {
            this.box.fillColor = this.color;
        });

        this.box.setOrigin(0.5, 0.5);

        this.text = new Phaser.GameObjects.Text(
            this.scene,
            this.box.x,
            this.box.y,
            this.label,
            {
                fontFamily: DEFAULT_FONT_FAMILIES,
                fontSize: this.fontSize,
                color: this.fontColor,
                align: "center",
                fontStyle: "bold",
            }
        );

        this.text.setOrigin(0.5, 0.5);

        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
}
