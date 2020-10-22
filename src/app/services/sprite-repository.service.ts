import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpriteRepositoryService {
  spriteArray: Array<PIXI.Sprite>;
  constructor() { }

  public addSprite(name: string, path: string) {
    this.spriteArray.push();

  }
}
