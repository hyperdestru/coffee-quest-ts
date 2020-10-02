export class Place {

	private _name: string;
	private _isRestricted: boolean;

	public get name(): string {
		return this._name;
	}

	public get isRestricted(): boolean {
		return this._isRestricted;
	}

	constructor(params: {
		name: string;
		isRestricted: boolean;
	}) {
		this._name = params.name;
		this._isRestricted = params.isRestricted;
	}
}