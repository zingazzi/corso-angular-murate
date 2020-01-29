import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../interface/todo.interface";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodosService } from "../../services/todos.service";

@Component({
  selector: "[app-todo]",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output("deleteTodo") deleteTodo = new EventEmitter();

  faTrash = faTrash;

  constructor() {}

  ngOnInit() {}

  removeTodo(): void {
    this.deleteTodo.emit(this.todo.id);
  }
}
