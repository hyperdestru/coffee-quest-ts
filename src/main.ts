/** @format */

import * as Phaser from "phaser";
import Scenes from "./scenes";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Coffee Quest",
    type: Phaser.AUTO,
    scale: { width: 900, height: 700 },
    input: { keyboard: true },
	dom: { createContainer: true },
    parent: "game",
    scene: Scenes,
};

export const game = new Phaser.Game(gameConfig);
