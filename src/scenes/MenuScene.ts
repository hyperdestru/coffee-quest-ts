/** @format */

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Menu",
};

export class MenuScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
}
