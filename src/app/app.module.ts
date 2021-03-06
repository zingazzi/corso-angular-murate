import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FirstControllerComponent } from "./controllers/first-controller/first-controller.component";
import { SecondControllerComponent } from "./controllers/second-controller/second-controller.component";
import { LibriComponent } from "./controllers/libri/libri.component";
import { LibroComponent } from "./controllers/libro/libro.component";
import { TodosComponent } from "./controllers/todos/todos.component";
import { TodoComponent } from "./controllers/todo/todo.component";
import { HeaderComponent } from "./controllers/header/header.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PostsComponent } from "./controllers/posts/posts.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstControllerComponent,
    SecondControllerComponent,
    LibriComponent,
    LibroComponent,
    TodosComponent,
    TodoComponent,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
