/** @format */

import { Character } from "./Character";
import { COLORS, FONT_SIZES, getGameHeight, getGameWidth } from "../helpers";
import { InteractiveItem } from "./InteractiveItem";
import { TextArea } from "../prefabs/TextArea";
import { InteractiveImageButton } from "../prefabs/InteractiveImageButton";
import { SceneStartButton } from "../prefabs/SceneStartButton";

export class Tableau {
    private scene: Phaser.Scene;
    private key: string;
    private text: Array<string>;
    private theme: Phaser.Sound.BaseSound;
    private items: Array<InteractiveItem>;
    private characters: Array<Character>;
    private background: Phaser.GameObjects.Image;
    private currentStringIndex: number;
    private currentString: string;
    private textArea: TextArea;
    private nextBtn: InteractiveImageButton;
    private mapBtn: SceneStartButton;

    endOfText(): boolean {
        if (this.currentStringIndex >= this.text.length) {
            return true;
        } else {
            return false;
        }
    }

    nextString(): string {
        this.currentStringIndex += 1;
        return this.text[this.currentStringIndex];
    }

    destroy() {
        this.background.destroy();
        this.nextBtn.destroy();
        this.textArea.destroyBoxAndText();
        this.mapBtn.destroyBoxAndText();
    }

    constructor(params: {
        scene: Phaser.Scene;
        key: string;
        text?: Array<string>;
        items?: Array<InteractiveItem>;
        characters?: Array<Character>;
    }) {
        this.scene = params.scene;
        this.key = params.key;
        this.text = params?.text;
        this.items = params?.items;
        this.characters = params?.characters;
        this.currentStringIndex = 0;
        this.currentString = this.text[this.currentStringIndex];
    }

    create() {
        this.background = this.scene.add.image(
            getGameWidth(this.scene) / 2,
            getGameHeight(this.scene) / 2,
            `${this.key}-bg`
        );

        this.textArea = new TextArea({
            scene: this.scene,
            x: getGameWidth(this.scene) / 2,
            y: getGameHeight(this.scene) - 82,
            width: getGameWidth(this.scene) - 150,
            height: 164,
            color: COLORS.black.hex,
            alpha: 0.8,
            currentString: this.currentString,
        });

        this.nextBtn = new InteractiveImageButton({
            scene: this.scene,
            x: getGameWidth(this.scene) - 42,
            y: getGameHeight(this.scene) - 75,
            textureKey: "buttonNext",
        });

        this.nextBtn.on("pointerdown", () => {
            if (this.endOfText() === false) {
                this.textArea.currentString = this.nextString();
            }
        });

        this.mapBtn = new SceneStartButton({
            scene: this.scene,
            x: 76,
            y: 30,
            width: 128,
            height: 35,
            color: COLORS.black.hex,
            hoverColor: COLORS.grey.hex,
            label: "MAP",
            fontSize: FONT_SIZES.large,
            fontColor: COLORS.white.string,
            alpha: 1,
            newSceneKey: "Overworld",
        });
    }
}
