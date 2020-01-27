import { Component, OnInit } from "@angular/core";
import { User } from "../../interface/user.interface";

@Component({
  selector: "app-second-controller",
  templateUrl: "./second-controller.component.html",
  styleUrls: ["./second-controller.component.css"]
})
export class SecondControllerComponent implements OnInit {
  utente: User = {
    name: "Mario",
    surname: "Rossi",
    email: "mario.rossi@hello.it",
    age: 35
  };

  utenti: User[] = [
    {
      name: "Luca",
      surname: "Verdi",
      email: "luca.verdi@hello.it",
      age: 25
    },
    {
      name: "Stefania",
      surname: "Borsi",
      email: "s.borsi@hello.it",
      age: 32
    },
    {
      name: "Federica",
      surname: "Neri",
      email: "federica.neri@hello.it",
      age: 31
    }
  ];

  constructor() {}

  ngOnInit() {}
}
