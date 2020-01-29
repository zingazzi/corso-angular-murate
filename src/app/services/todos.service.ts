import { Injectable } from "@angular/core";
import { Todo } from "../interface/todo.interface";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  constructor() {}

  todos: Todo[] = [];

  lastId: number = 0;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodos(task: string) {
    this.lastId++;
    let item: Todo = {
      id: this.lastId,
      task: task,
      active: true
    };
    this.todos.push(item);
  }

  removeTodo(taskId: number) {
    this.todos = this.todos.filter(todo => todo.id !== taskId);
  }
}
