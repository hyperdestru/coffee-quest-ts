
export class InteractiveItem extends Phaser.GameObjects.Image {

	constructor(params: {
		scene: Phaser.Scene;
		x: number;
		y: number;
		textureKey: string;
	}) {
		super(params.scene, params.x, params.y, params.textureKey);
		this.scene.add.existing(this);
		this.setInteractive();
	}
}