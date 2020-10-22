import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RenderEvent } from '../model/events/render-event';
import * as PIXI from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class RenderingSubjectsService {
  public sceneSubject: Subject<RenderEvent> = new Subject();
  public app = new PIXI.Application();
  currentRotation: number = 0.01;


  constructor() {
  }

  public startRendering() {
    this.app.loader.add('bunny', 'assets/bunny.png').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const bunny = new PIXI.Sprite(resources.bunny.texture);

      // Setup the position of the bunny
      bunny.x = this.app.renderer.width / 2;
      bunny.y = this.app.renderer.height / 2;

      // Rotate around the center
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;

      // Add the bunny to the scene we are building
      this.app.stage.addChild(bunny);

      // Listen for frame updates
      this.app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += this.currentRotation;
      });
    });


  }



}
