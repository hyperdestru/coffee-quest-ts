/** @format */

import { COLORS, DEFAULT_FONT_FAMILIES, FONT_SIZES } from "../helpers";

export class MainBtn {
	private scene: Phaser.Scene;
	private x: number;
	private y: number;
	private width: number;
	private height: number;
	private color: number;
	private text: string;
	private alpha: number;
	private newSceneKey: string;
	private sceneData: any;

    constructor(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        width: number;
        height: number;
        color: number;
        text: string;
        alpha: number;
        newSceneKey: string;
        sceneData: any;
    }) {

		this.scene = params.scene;
		this.x = params.x;
		this.y = params.y;
		this.width = params.width;
		this.height = params.height;
		this.color = params.color;
		this.text = params.text;
		this.alpha = params.alpha;
		this.newSceneKey = params.newSceneKey;
		this.sceneData = params.sceneData;

		const box = new Phaser.GameObjects.Rectangle(
            this.scene,
            this.x,
            this.y,
            this.width,
            this.height,
            this.color,
            this.alpha
		);
		
		box.setInteractive();

        box.on("pointerdown", () => {
				this.scene.sound.stopAll();
				
                this.scene.cameras.main.fadeOut(1000, 0, 0, 0);
                this.scene.cameras.main.once(
					Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, 
					() => {
                        this.scene.scene.start(this.newSceneKey, this.sceneData);
					}
                );
            },
            this.scene
        );

        box.on("pointerover", () => {
            box.fillColor = COLORS.customYellow.hex;
        });

        box.on("pointerout", () => {
            box.fillColor = this.color;
        });

        box.setOrigin(0.5, 0.5);

        const text = new Phaser.GameObjects.Text(
            this.scene,
            box.x,
            box.y,
            this.text,
            {
                fontFamily: DEFAULT_FONT_FAMILIES,
                fontSize: FONT_SIZES.xlarge,
                color: COLORS.black.string,
                align: "center",
                fontStyle: "bold",
            }
        );

        text.setOrigin(0.5, 0.5);

        this.scene.add.existing(box);
        this.scene.add.existing(text);
	}

}
