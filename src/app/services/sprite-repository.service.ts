import { Injectable } from '@angular/core';
import { SpriteDescription } from '../model/sprite-description';
@Injectable({
  providedIn: 'root'
})
export class SpriteRepositoryService {
  spriteArray: Array<SpriteDescription>;
  constructor() { }

  public addSprite(name: string, path: string) {
    this.spriteArray.push(new SpriteDescription(name, path));
  }


}
