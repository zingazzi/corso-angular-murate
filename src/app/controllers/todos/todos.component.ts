import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interface/todo.interface";
import { TodosService } from "../../services/todos.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todoTask: string = "";

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todosService.getTodos();
  }

  addTodo(): void {
    if (this.todoTask != "") {
      this.todosService.addTodos(this.todoTask);
      this.todoTask = "";
      this.getTodos();
    }
  }
}
