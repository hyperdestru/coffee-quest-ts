/** @format */

import { Place } from "./Place";
import { Tilemap } from "./Tilemap";

export class Pawn extends Phaser.GameObjects.Image {
    private col: number;
    private line: number;
    private currentPlace: Place;

    private moveNorth() {
        this.line -= 1;
        this.y -= 100;
    }

    private moveSouth() {
        this.line += 1;
        this.y += 100;
    }

    private moveEast() {
        this.col += 1;
        this.x += 100;
    }

    private moveWest() {
        this.col -= 1;
        this.x -= 100;
    }

    private updatePawn(pointer: Phaser.Input.Pointer, pTilemap: Tilemap): void {
        let px = Math.floor(pointer.x / pTilemap.tileWidth);
        let py = Math.floor(pointer.y / pTilemap.tileHeight);

        if (py === this.line + 1 && px === this.col) {
            this.moveSouth();
        } else if (py === this.line - 1 && px === this.col) {
            this.moveNorth();
        } else if (px === this.col + 1 && py === this.line) {
            this.moveEast();
        } else if (px === this.col - 1 && py === this.line) {
            this.moveWest();
        } else if (px === this.col - 1 && py === this.line - 1) {
            this.moveNorth();
            this.moveWest();
        } else if (px === this.col - 1 && py === this.line + 1) {
            this.moveSouth();
            this.moveWest();
        } else if (px === this.col + 1 && py === this.line - 1) {
            this.moveNorth();
            this.moveEast();
        } else if (px === this.col + 1 && py === this.line + 1) {
            this.moveSouth();
            this.moveEast();
        }

        this.currentPlace = pTilemap.grid[this.line][this.col];
    }

    constructor(params: {
        scene: Phaser.Scene;
        col: number;
        line: number;
        textureKey: string;
        tilemap: Tilemap;
    }) {
        super(
            params.scene,
            params.col === 0
                ? params.tilemap.tileWidth / 2
                : params.col * params.tilemap.tileWidth +
                      params.tilemap.tileHeight / 2,
            params.line === 0
                ? params.tilemap.tileHeight / 2
                : params.line * params.tilemap.tileWidth +
                      params.tilemap.tileHeight / 2,
            params.textureKey
        );

        this.scene.add.existing(this);

        this.col = params.col;
        this.line = params.line;

        this.x =
            this.col === 0
                ? params.tilemap.tileWidth / 2
                : this.col * params.tilemap.tileWidth +
                  params.tilemap.tileWidth / 2;
        this.y =
            this.line === 0
                ? params.tilemap.tileHeight / 2
                : this.line * params.tilemap.tileHeight +
                  params.tilemap.tileHeight / 2;

        this.scene.input.on(
            "pointerdown",
            (pointer) => {
                this.updatePawn(pointer, params.tilemap);
            },
            this.scene
        );
    }
}
