/** @format */

import { Tilemaps } from "phaser";
import { Tableau } from "../objects/Tableau";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Intro100",
};

export class Intro100 extends Phaser.Scene {
    private tableaux: Array<Tableau>;
    private currentTableau: Tableau;
    private currentTableauIndex: number;

    private endOfTableaux(): boolean {
        if (this.currentTableauIndex >= this.tableaux.length) {
            return true;
        } else {
            return false;
        }
    }

    private nextTableau(): Tableau {
        this.currentTableauIndex += 1;
        return this.tableaux[this.currentTableauIndex];
    }

    constructor() {
        super(sceneConfig);

        this.tableaux = [
            new Tableau({
                scene: this,
                key: "101-kitchen",
                text: [
                    "Mmmh, uh, hein ? Quelle heure il est ? Qui suis-je ?",
                    "Est-ce que... Est-ce que j'ai pas un job où je dois aller, ou quelque chose ?",
                    "Mgblr, il me faut un café. Tout ira bien lorsque j'aurai bu mon café",
                    "Ehhh ? Plus de café. Bon, pas de panique, je vais juste aller en acheter un au café du coin.",
                ],
            }),
            new Tableau({
                scene: this,
                key: "102-shop",
                text: [
                    "Bonjour caffelier, votre meilleur café, dans une grande tasse, pronto ! Espresso !",
                    "rmm brrmm grmm",
                    "Comment ? Plus de café ? Vous plaisantez bien sûr, on me la fait pas, il y a écrit « coffee » derrière vous. Sans café, vous n'êtes rien !",
                    "grmmbl brummb drmm",
                    "Une pénurie de café ? Toute la ville est touchée ?",
                    "grmb prummbll",
                    "Mais c'est une catastrophe, l'économie va s’effondrer ! Je ne me souviens même plus où je travaille !",
                    "grmmb brmmbl",
                    "Aller voir le fournisseur de la ville, Mol Palanã ? J'y vais de ce pas ! Tiens bon, brave caffelier !",
                ],
            }),
            new Tableau({
                scene: this,
                key: "103-livingroom",
                text: [
                    "Plus de café, je n'arrive pas à y croire, c'est déjà un miracle que je tienne debout. Si on ne résout pas ce problème rapidement, tout sera perdu.",
                    "Palanã ! L'heure est grave ! On est que lundi, et j'en ai déjà plein le dos.",
                    "A qui le dites-vous, la pénurie de café touche le continent entier.",
                ],
            }),
        ];

        this.currentTableauIndex = 1;
        this.currentTableau = this.tableaux[this.currentTableauIndex];
    }

    create() {
		this.currentTableau.create();
    }

    update() {
	}
}
