/** @format */

import { getGameWidth, getGameHeight } from "../helpers";
import { Place } from "./Place";

export class Tilemap {
    private tilesheet: Phaser.GameObjects.Image;
    private _tileWidth: number;
    private _tileHeight: number;
    private _grid: Place[][];

    public get tileWidth(): number {
        return this._tileWidth;
    }

    public get tileHeight(): number {
        return this._tileHeight;
    }

    public get grid(): object {
        return this._grid;
    }

    private initTilesSizes(): void {
        this._tileWidth = 100;
        this._tileHeight = 100;
    }

    constructor(params: { scene: Phaser.Scene }) {
        this.initTilesSizes();

        const Places = {
            Sea: new Place({ name: "the sea", isRestricted: false }),
            Beach: new Place({ name: "the beach", isRestricted: false }),
            Grass: new Place({ name: "the grass", isRestricted: false }),
            City: new Place({ name: "the city", isRestricted: false }),
            Forest: new Place({ name: "the forest", isRestricted: false }),
            Lighthouse: new Place({ name: "the lighthouse", isRestricted: true }),
            Pyramid: new Place({ name: "the pyramid", isRestricted: true }),
            Dick: new Place({ name: "the dick", isRestricted: true }),
            Castle: new Place({ name: "the castle", isRestricted: true }),
        };

        this._grid = [
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.City,
                Places.City,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Dick,
                Places.Grass,
                Places.Grass,
                Places.City,
                Places.City,
            ],
            [
                Places.Sea,
                Places.Lighthouse,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Pyramid,
            ],
            [
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Grass,
                Places.Grass,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Grass,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
            ],
            [
                Places.Sea,
                Places.Sea,
                Places.Beach,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Forest,
                Places.Castle,
                Places.Forest,
            ],
        ];

        this.tilesheet = params.scene.add.image(
            getGameWidth(params.scene) / 2,
            getGameHeight(params.scene) / 2,
            "overworldMap"
        );
    }
}
