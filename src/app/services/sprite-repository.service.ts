import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpriteRepositoryService {
  spriteArray: Array<PIXI.Sprite>;
  constructor() { }
}
