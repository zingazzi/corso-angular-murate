import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Hello World";

  moduleVar: string;
  isPalindrom = false;

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

  elaboraVariabileInput(): void {
    let reversed = this.ribaltaStringa(this.moduleVar);
    this.isPalindrom = false;
    if (reversed == this.moduleVar) {
      this.isPalindrom = true;
    }
  }

  resettaPalindrom(): void {
    this.isPalindrom = false;
  }

  ribaltaStringa(str: string): string {
    return str
      .split("")
      .reverse()
      .join("");
  }
}
