/** @format */

export class InteractiveImageButton extends Phaser.GameObjects.Image {
    constructor(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
		textureKey: string;
		hoverColor?: number;
    }) {
        super(params.scene, params.x, params.y, params.textureKey);
        this.scene.add.existing(this);
		this.setInteractive();
		
		if (params.hoverColor) {
			this.on("pointerover", () => {
				this.setTint(params.hoverColor);
			});

			this.on("pointerout", () => {
				this.clearTint();
			})
		}
    }
}
