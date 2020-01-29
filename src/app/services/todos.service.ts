import { Injectable } from "@angular/core";
import { Todo } from "../interface/todo.interface";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  constructor() {}

  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodos(task: string) {
    let item: Todo = {
      task: task,
      active: true
    };
    this.todos.push(item);
  }
}
