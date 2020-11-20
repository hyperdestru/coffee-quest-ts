/** @format */

import {
    getGameWidth,
    getGameHeight,
    DEFAULT_FONT_FAMILIES,
    COLORS,
} from "../helpers";

export class Gui {
    public static readonly mainBtnStyle = `
		width: 128px; 
		height: 48px;
		font-weight: bold;
		font-size: 25px;
		font-family: ${DEFAULT_FONT_FAMILIES};
		color: ${COLORS.customYellow.string};
		background-color: ${COLORS.black.string};
		border: 3px solid ${COLORS.customYellow.string};
	`;

    public static readonly secondaryBtnStyle = `
		width: 100px;
		height: 33px;
		font-size: 17px;
		border-radius: 4px;
		color: ${COLORS.black.string};
		font-family: ${DEFAULT_FONT_FAMILIES};
		background-color: ${COLORS.white.string};
		border: 2px solid ${COLORS.black.string};
	`;

	public static readonly mainTitleStyle = `
		font-size: 40px;
		color: ${COLORS.white.string};
		font-family: ${DEFAULT_FONT_FAMILIES};
	`;

	public static readonly secondaryTitleStyle = `
		font-size: 30px 
		color: ${COLORS.white.string} 
		font-family: ${DEFAULT_FONT_FAMILIES}
	`;

	public static readonly simpleParagraphStyle = `
		font-size: 20px;
		text-align: center;
		color: ${COLORS.white.string};
		font-family: ${DEFAULT_FONT_FAMILIES};
	`;

    /**
     * Create a stylized Button DOM Element with a click event listener attached
     * to it. The event listener callback starts a new scene using the scene key
     * passed in arguments and stops all sounds if stopSounds set to true.
     */
    public static mainBtn(params: {
        scene: Phaser.Scene;
        text: string;
        stopSounds: boolean;
        scenePlugin: Phaser.Scenes.ScenePlugin;
        newSceneKey: string;
        sceneData?: object;
    }): void {
        params.scene.add
            .dom(
                getGameWidth(params.scene) / 2,
                getGameHeight(params.scene) - 100,
                "button",
                Gui.mainBtnStyle,
                params.text
            )
            .addListener("click")
            .on("click", () => {
                if (params.stopSounds) {
                    params.scene.sound.stopAll();
                }

                // Trigger fade-out to black
                params.scene.cameras.main.fadeOut(1000, 0, 0, 0);

                // When triggered fade-out is finished then we start the new scene
                params.scene.cameras.main.once(
                    Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                    () => {
                        params.scenePlugin.start(
                            params.newSceneKey,
                            params.sceneData
                        );
                    }
                );
            });
    }

    /**
     * Button that changes an image (img) texture with another (textures),
     * one by one. Like a slideshow.
     * @param img: a phaser game object image that act as a container in a way.
     * @param textures: the textures to append to img.
     */
    public static slideBtn(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
        img: Phaser.GameObjects.Image;
        textureKeys: Array<string>;
        callback?: Function;
    }): void {
        let currentIndex = 0;

        params.scene.add
            .dom(
                params.x,
                params.y,
                "button",
                Gui.secondaryBtnStyle,
                params.text
            )
            .addListener("click")
            .on("click", function () {
                params.scene.sound.add("clickSound").play();

                if (currentIndex < params.textureKeys.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }

                if (params.callback !== undefined) {
                    params.callback();
                }

                params.img.setTexture(params.textureKeys[currentIndex]);
            });
    }

    public static title(params: { 
		scene: Phaser.Scene; 
		text: string;
	}): void {
        params.scene.add.dom(
            getGameWidth(params.scene) / 2,
            24,
            "h3",
            Gui.mainTitleStyle,
            params.text
        );
    }

    public static sectionTitle(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
    }): void {
        params.scene.add.dom(
            params.x,
            params.y,
            "h4",
            Gui.secondaryTitleStyle,
            params.text
        );
    }

    public static simpleParagraph(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
    }): void {
        params.scene.add.dom(
            params.x,
            params.y,
            "p",
           	Gui.simpleParagraphStyle,
            params.text
        );
    }
}
