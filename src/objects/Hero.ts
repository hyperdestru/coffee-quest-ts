import { Character } from "./Character";

export class Hero extends Character {

	private coins: number;
	private currentProgression: object;

	constructor(params: {
		name: string;
	}) {
		super(params.name);
	}
}