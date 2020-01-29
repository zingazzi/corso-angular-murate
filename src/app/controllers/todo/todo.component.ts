import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../interface/todo.interface";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodosService } from "../../services/todos.service";

@Component({
  selector: "[app-todo]",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodosService]
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  faTrash = faTrash;

  constructor(private todoService: TodosService) {}

  ngOnInit() {}

  removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
}
