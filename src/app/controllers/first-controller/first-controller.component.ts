import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first-controller",
  templateUrl: "./first-controller.component.html",
  styleUrls: ["./first-controller.component.css"]
})
export class FirstControllerComponent implements OnInit {
  primoNumero: number = 5;

  constructor() {
    console.log("primo controller - constructor");
  }

  ngOnInit() {
    console.log("primo controller - Init");
  }
}
