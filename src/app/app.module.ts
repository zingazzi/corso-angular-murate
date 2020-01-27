import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstControllerComponent } from './controllers/first-controller/first-controller.component';

@NgModule({
  declarations: [AppComponent, FirstControllerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
