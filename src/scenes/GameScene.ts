/** @format */

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

export class GameScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
}
