import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './scene/scene.component';



@NgModule({
  declarations: [SceneComponent],
  imports: [
    CommonModule
  ],
  exports: [SceneComponent]
})
export class SceneModule { }
