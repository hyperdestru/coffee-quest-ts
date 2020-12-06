/** @format */

import {
    getGameWidth,
    getGameHeight,
    DEFAULT_FONT_FAMILIES,
    COLORS,
} from "../helpers";

export class Gui {

    public static mainBtn(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        width: number;
        height: number;
        color: number;
        text: string;
        alpha?: number;
        newSceneKey?: string;
        sceneData?: Object;
    }) {
        const box = new Phaser.GameObjects.Rectangle(
            params.scene,
            getGameWidth(params.scene) / 2,
            params.y,
            params.width,
            params.height,
            params.color,
            params.alpha !== undefined ? params.alpha : 1
        ).setInteractive();

        box.on(
            'pointerdown',
            () => {
                params.scene.sound.stopAll();
                params.scene.cameras.main.fadeOut(1000, 0, 0, 0);
                params.scene.cameras.main.once(
                    Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                    () => {
                        if (params.newSceneKey) {
                            params.scene.scene.start(
                                params.newSceneKey,
                                params.sceneData !== undefined
                                    ? params.sceneData
                                    : null
                            );
                        }
                    }
                );
            },
            params.scene
        );

        box.setOrigin(0.5, 0.5);

        const text = new Phaser.GameObjects.Text(
            params.scene,
            box.x,
            box.y,
            params.text,
            {
                fontFamily: DEFAULT_FONT_FAMILIES,
                fontSize: "32px",
                color: COLORS.black.string,
                align: "center",
                fontStyle: "bold",
            }
        );

        text.setOrigin(0.5, 0.5);
		
		// TODO : Put box and text inside a container
        params.scene.add.existing(box);
        params.scene.add.existing(text);
    }
}
