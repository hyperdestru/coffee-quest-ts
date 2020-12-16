/** @format */

import { COLORS, DEFAULT_FONT_FAMILIES, FONT_SIZES } from "../helpers";

export class TextArea {
    private scene: Phaser.Scene;
    private box: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: number;
    private alpha: number;
    private textPadding: number;
    private _currentString: string;

    set currentString(v: string) {
        this.text.setText(v);
    }

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
        alpha: number;
        currentString: string;
    }) {
        this.scene = params.scene;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.color = params.color;
        this.alpha = params.alpha;
        this.textPadding = 10;
        this._currentString = params.currentString;

        this.box = new Phaser.GameObjects.Rectangle(
            this.scene,
            this.x,
            this.y,
            this.width,
            this.height,
            this.color,
            this.alpha
        );

        this.text = new Phaser.GameObjects.Text(
            this.scene,
            this.box.x - this.box.width / 2,
            this.box.y - this.box.height / 2,
            this._currentString,
            {
                fontFamily: DEFAULT_FONT_FAMILIES,
                fontSize: FONT_SIZES.large,
                color: COLORS.white.string,
                fontStyle: "bold",
                wordWrap: { width: this.width - this.textPadding },
                padding: {
                    left: this.textPadding,
                    right: this.textPadding,
                    top: this.textPadding,
                    bottom: this.textPadding,
                },
            }
        );

        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
}
