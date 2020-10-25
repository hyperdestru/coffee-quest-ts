/** @format */

import { COLORS, getGameHeight, getGameWidth } from "../helpers";

export class LoadingBar extends Phaser.GameObjects.Rectangle {
	private maxWidth: number;

    constructor(params: { scene: Phaser.Scene }) {
        super(
            params.scene,
            (getGameWidth(params.scene)/2) - 200,
            (getGameHeight(params.scene)/2) + 50,
            0,
            20,
            COLORS.customRed.hex
        );

		this.scene.add.existing(this);
		this.maxWidth = 400;
    }

    public update(pProgressValue: number = 0) {
		this.width += pProgressValue*100;
	}
}
