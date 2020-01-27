import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstControllerComponent } from './controllers/first-controller/first-controller.component';
import { SecondControllerComponent } from './controllers/second-controller/second-controller.component';

@NgModule({
  declarations: [AppComponent, FirstControllerComponent, SecondControllerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
