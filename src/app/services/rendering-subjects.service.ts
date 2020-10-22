import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RenderEvent } from '../model/events/render-event';

@Injectable({
  providedIn: 'root'
})
export class RenderingSubjectsService {
  public sceneSubject: Subject<RenderEvent> = new Subject();
  constructor() { }
}
