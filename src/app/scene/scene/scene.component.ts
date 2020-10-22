import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { RenderingSubjectsService } from 'src/app/services/rendering-subjects.service';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.sass']
})
export class SceneComponent implements AfterViewInit {


  constructor(public renderingSubjectService: RenderingSubjectsService) { }


  /* LIFECYCLE */
  ngAfterViewInit() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container


    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.body.appendChild(this.renderingSubjectService.app.view);
    this.renderingSubjectService.sceneSubject.subscribe(event => this.renderingSubjectService.currentRotation = event.value);
    this.renderingSubjectService.startRendering();

  }
}
