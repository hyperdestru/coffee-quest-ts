/** @format */

import { COLORS, getGameHeight, getGameWidth } from "../helpers";
import { Tableau } from "../objects/Tableau";
import { InteractiveBtn } from "../prefabs/InteractiveBtn";
import { TextArea } from "../prefabs/TextArea";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Intro",
};

export class IntroScene extends Phaser.Scene {
	private tableaux: Array<Tableau>;
	private textArea: TextArea;
	private nextBtn: InteractiveBtn;
	private currentTableau: Tableau;
	private currentTableauIndex: number;
	private currentString: string;
	private currentStringIndex: number;

	private nextString(): string {
		this.currentStringIndex += 1;
		this.currentString = this.currentTableau.text[this.currentStringIndex];
		return this.currentString;
	}

	private endOfText(): boolean {
		if (this.currentStringIndex < this.currentTableau.text.length) {
			return false;
		} else {
			return true;
		}
	}

    constructor() {
		super(sceneConfig);
	}
	
    create() {
		this.tableaux = [
			new Tableau({
				scene: this,
				name: "kitchen",
				backgroundKey: "intro-scene-kitchen",
				text: [
					"Mmmh, uh, hein ? Quelle heure il est ? Qui suis-je ?",
					"Est-ce que... Est-ce que j'ai pas un job où je dois aller, ou quelque chose ?",
					"Mgblr, il me faut un café. Tout ira bien lorsque j'aurai bu mon café."
				]
			})
		];
	
		this.currentTableauIndex = 0;
		this.currentTableau = this.tableaux[this.currentTableauIndex];

		this.currentStringIndex = 0;
		this.currentString = this.currentTableau.text[this.currentStringIndex];
		
		this.textArea = new TextArea({
			scene: this,
			x: getGameWidth(this)/2,
			y: getGameHeight(this)-82,
			width: getGameWidth(this)-150,
			height: 164,
			color: COLORS.black.hex,
			alpha: 0.8,
			currentString: this.currentString
		});

		this.nextBtn = new InteractiveBtn({
			scene: this,
			x: getGameWidth(this)-42,
			y: getGameHeight(this)-75,
			textureKey: "buttonNext"
		});

		this.nextBtn.on("pointerdown", () => {
			if (!this.endOfText()) {
				this.textArea.setCurrentString(this.nextString());
			}
		})
	}
	
}
