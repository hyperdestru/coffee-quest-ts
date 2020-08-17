import { getGameWidth, getGameHeight } from "../helpers";

export class Tilemap {

	private tilesheet: Phaser.GameObjects.Image;
	private _tilesGrid: number[][];
	private _tileWidth: number;
	private _tileHeight: number;
	private _tileTypes: object;

	public get tileWidth(): number {
		return this._tileWidth;
	}

	public get tileHeight(): number {
		return this._tileHeight;
	}

	public get tileTypes(): object {
		return this._tileTypes;
	}

	public get tilesGrid(): number[][] {
		return this._tilesGrid;
	}

	private initTilesSizes(): void {
		this._tileWidth = 100;
		this._tileHeight = 100;
	}

	constructor(params: {
		scene: Phaser.Scene;
	}) {

		this.initTilesSizes();

		this._tilesGrid = [
			[ 0,1,2,3,4,5,6,7,8 ],
			[ 9,10,11,12,13,14,15,16,17 ],
			[ 18,19,20,21,22,23,24,25,26 ],
			[ 27,28,29,30,31,32,33,34,35 ],
			[ 36,37,38,39,40,41,42,43,44 ],
			[ 45,46,47,48,49,50,51,52,53 ],
			[ 54,55,56,57,58,59,60,61,62 ]
		];

		this._tileTypes = {
			sea: [0,1,9,10,11,27,28,36,45,46,54,55],
			beach: [2,11,20,29,37,47,56],
			grass: [3,4,5,6,12,14,15,21,22,23,24,25,26,30,31,32,33,34,38,39,40,48],
			city: [7,8,16,17],
			forest: [41,42,43,44,49,50,51,52,53,57,58,59,60,61,62],
			dick: [13],
			lighthouse: [19],
			pyramid: [35],
			castle: [61],
		}

		this.tilesheet = params.scene.add.image(
			getGameWidth(params.scene)/2, 
			getGameHeight(params.scene)/2,
			'overworldMap'
		);
	}
}