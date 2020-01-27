import { Component, OnInit } from "@angular/core";
import { Libro } from "../../interface/libro.interface";

@Component({
  selector: "app-libri",
  templateUrl: "./libri.component.html",
  styleUrls: ["./libri.component.css"]
})
export class LibriComponent implements OnInit {
  libreria: Libro[] = [
    {
      title: "Il problema dei tre corpi",
      author: "Cixin Liu",
      pages: 350,
      cover: "https://images-eu.ssl-images-amazon.com/images/I/51IrSv4ZLGL.jpg"
    },
    {
      title: "Persone normali",
      author: "Sally Rooney",
      pages: 412,
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/61oj-wv%2BmZL.jpg"
    },
    {
      title: "I ragazzi della Nickel",
      author: "Colson Whitehead",
      pages: 327,
      cover: "https://images-eu.ssl-images-amazon.com/images/I/31WwZDPtagL.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
