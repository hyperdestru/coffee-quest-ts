/** @format */

export class Character {
    private scene: Phaser.Scene;
    private name: string;
	private textureKey: string;
	private image: Phaser.GameObjects.Image;
	private voiceKey: string;
	private voice: Phaser.Sound.BaseSound;

	speak() {
		if (this.voice) {
			this.voice.play();
		}
	}

    constructor(params: {
        scene: Phaser.Scene;
        name: string;
        textureKey: string;
        voiceKey?: string;
    }) {
		this.scene = params.scene;
		this.name = params.name;
		this.textureKey = params.textureKey;
		this.voiceKey = params.voiceKey;
		
		this.image = this.scene.add.image(0, 0, this.textureKey);

		if (this.voiceKey) {
			this.voice = this.scene.sound.add(this.voiceKey);
		}
    }
}
