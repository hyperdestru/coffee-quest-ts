/** @format */

export class Character {
    private scene: Phaser.Scene;
    private name: string;
    private image: Phaser.GameObjects.Image;
	private voice: Phaser.Sound.BaseSound;
	private textureKey: string;

    constructor(params: {
        scene: Phaser.Scene;
        name: string;
        textureKey: string;
        voiceKey: string;
    }) {
		this.scene = params.scene;
        this.name = params.name;
		this.textureKey = params.textureKey;
		
        this.image = this.scene.add.image(0, 0, this.textureKey);
    }
}
