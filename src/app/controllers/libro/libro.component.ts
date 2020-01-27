import { Component, OnInit, Input } from "@angular/core";
import { Libro } from "../../interface/libro.interface";

@Component({
  selector: "app-libro",
  templateUrl: "./libro.component.html",
  styleUrls: ["./libro.component.css"]
})
export class LibroComponent implements OnInit {
  @Input() libro: Libro;
  showCover: boolean = false;

  constructor() {}

  ngOnInit() {}

  mostraCover(): void {
    console.log("cliccato");
    this.showCover = !this.showCover;
  }
}
