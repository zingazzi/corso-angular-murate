import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Hello World";

  primoNumero: number = 4;
  secondoNumero: number = 6;

  booleano: boolean = true;

  variabileStringaDaAssegnare: string;
  variabileNumericaDaAssegnare: number;

  getVariableResult(): string {
    return "Variabile in una funzione";
  }

  quadratoDiNumeri() {
    let risultato = this.primoNumero * this.primoNumero;
    return risultato;
  }

  assegnaNumeroAVariabile(): void {
    this.variabileNumericaDaAssegnare = this.secondoNumero * this.secondoNumero;
  }
}
