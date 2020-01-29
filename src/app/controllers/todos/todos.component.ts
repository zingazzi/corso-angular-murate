import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interface/todo.interface";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        task: "Primo task",
        active: true
      },
      {
        task: "Secondo task",
        active: true
      }
    ];
  }
}
