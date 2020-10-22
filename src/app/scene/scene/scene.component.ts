import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { RenderingSubjectsService } from 'src/app/services/rendering-subjects.service';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {
  currentRotation: number = 0.01;

  constructor(private renderingSubjectService: RenderingSubjectsService) { }


  /* LIFECYCLE */
  ngAfterViewInit() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application();

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.body.appendChild(app.view);
    this.renderingSubjectService.sceneSubject.subscribe(event => this.currentRotation = event.value);
    // load the texture we need
    app.loader.add('bunny', 'assets/bunny.png').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const bunny = new PIXI.Sprite(resources.bunny.texture);

      // Setup the position of the bunny
      bunny.x = app.renderer.width / 2;
      bunny.y = app.renderer.height / 2;

      // Rotate around the center
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;

      // Add the bunny to the scene we are building
      app.stage.addChild(bunny);

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += this.currentRotation;
      });
    });


  }
}
