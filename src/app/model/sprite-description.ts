import * as PIXI from 'pixi.js';

export class SpriteDescription {
    name: string;
    path: string;
    sprite: PIXI.Sprite;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}
