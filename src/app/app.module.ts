import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SceneModule } from './scene/scene.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SceneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
