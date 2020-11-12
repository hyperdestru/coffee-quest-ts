
import { COLORS, getGameHeight, getGameWidth } from "../helpers";

// TODO : Clean everything up, encapsulate, use properties

export class LoadingBar {
    private bar: Phaser.GameObjects.Graphics;
    private x: number;
    private y: number;
    private width: number;
	private height: number;
	private text: Phaser.GameObjects.Text;
	private _progressText: Phaser.GameObjects.Text;
	private scene: Phaser.Scene;
	private box: Phaser.GameObjects.Graphics;

	public get progressText(): Phaser.GameObjects.Text {
		return this._progressText;
	}
	
    public draw(pValue): void {
		this.bar.clear();
		this.bar.fillStyle(COLORS.white.hex, 0.9);
		this.bar.fillRect(
			(getGameWidth(this.scene)/2) - 200, 
			(getGameHeight(this.scene)/2) - 15, 
			400 * pValue, 
			30
		);
	}
	
	public destroy(): void {
		this.bar.destroy();
		this.box.destroy();
		this.text.destroy();
		this.progressText.destroy();
	}

    constructor(params: { scene: Phaser.Scene }) {
		this.scene = params.scene;

        this.bar = this.scene.add.graphics();
		
		this.box = this.scene.add.graphics();
		this.box.fillStyle(COLORS.white.hex, 0.2);
		this.box.fillRect(
			(getGameWidth(this.scene)/2) - 205, 
			(getGameHeight(this.scene)/2) - 20, 
			410, 
			40
		);
		
		this.text = this.scene.make.text({
			x: getGameWidth(this.scene)/2,
			y: (getGameHeight(this.scene)/2) + 40,
			text: "Chargement...",
			style: {
				font: '20px monospace',
				fill: '#ffffff'
			}
		});
		this.text.setOrigin(0.5, 0.5);

		this._progressText = this.scene.make.text({
			x: (getGameWidth(this.scene)/2), 
			y: (getGameHeight(this.scene)/2),
			text: "0%",
			style: {
				font: '18px monospace',
				fill: '#000000'
			}
		});
		this._progressText.setOrigin(0.5, 0.5);
    }
}
