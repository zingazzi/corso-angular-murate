import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstControllerComponent } from './controllers/first-controller/first-controller.component';
import { SecondControllerComponent } from './controllers/second-controller/second-controller.component';
import { LibriComponent } from './controllers/libri/libri.component';
import { LibroComponent } from './controllers/libro/libro.component';

@NgModule({
  declarations: [AppComponent, FirstControllerComponent, SecondControllerComponent, LibriComponent, LibroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
