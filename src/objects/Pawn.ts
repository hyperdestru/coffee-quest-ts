import { Tilemap } from "./Tilemap";

export class Pawn extends Phaser.GameObjects.Image {

	private col: number;
	private line: number;

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

	private moveNorthEast() {
		this.moveNorth();
		this.moveEast();
	}

	private moveNorthWest() {
		this.moveNorth();
		this.moveWest();
	}

	private moveSouthEast() {
		this.moveSouth();
		this.moveEast();
	}

	private moveSouthWest() {
		this.moveSouth();
		this.moveWest();
	}

	private updatePawn(pointer, pTilemap): void {
		let normalizedPx = Math.floor(pointer?.x / pTilemap?.tileWidth);
		let normalizedPy = Math.floor(pointer?.y / pTilemap?.tileHeight);

		if (normalizedPx === this.col + 1) {
			this.moveEast();
		} else if (normalizedPx === this.col - 1) {
			this.moveWest();
		} else if(normalizedPy === this.line + 1) {
			this.moveSouth();
		} else if (normalizedPy === this.line - 1) {
			this.moveNorth();
		} else if (normalizedPx === this.col + 1 && normalizedPy === this.line + 1) {
			this.moveSouthEast();
		} else if (normalizedPx === this.col - 1 && normalizedPy === this.line - 1) {
			this.moveNorthWest();
		} else if (normalizedPx === this.col + 1 && normalizedPy === this.line - 1) {
			this.moveNorthEast();
		} else if (normalizedPx === this.col - 1 && normalizedPy === this.line + 1) {
			this.moveSouthWest();
		}
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
			(params.col === 0) ? params.tilemap.tileWidth/2 : (params.col * params.tilemap.tileWidth) + params.tilemap.tileHeight/2, 
			(params.line === 0) ? params.tilemap.tileHeight/2 : (params.line * params.tilemap.tileWidth) + params.tilemap.tileHeight/2,
			params.textureKey
		);

		this.scene.add.existing(this);

		this.col = params.col;
		this.line = params.line;

		this.x = (this.col === 0) ? params.tilemap.tileWidth/2 : (this.col * params.tilemap.tileWidth) + params.tilemap.tileWidth/2;
		this.y = (this.line === 0) ? params.tilemap.tileHeight/2 : (this.line * params.tilemap.tileHeight) + params.tilemap.tileHeight/2;

		this.scene.input.on('pointerdown', (pointer) => {
			this.updatePawn(pointer, params.tilemap);
		}, this.scene);
	}

	update() {}
}