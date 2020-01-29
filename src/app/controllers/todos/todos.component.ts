import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interface/todo.interface";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todoTask: string = "";

  constructor() {}

  ngOnInit() {}

  addTodo(): void {
    if (this.todoTask != "") {
      let newTodo: Todo = {
        task: this.todoTask,
        active: true
      };
      this.todos.push(newTodo);
      this.todoTask = "";
    }
  }
}
