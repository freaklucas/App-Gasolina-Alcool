import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String="Resultado"
  /* inicializando as var p conectar elas ao ngModel */
  public precoAlcool: string =""
  public precoGasolina: string =""

  public calcular() {
    /* validar se os campos foram preenchidos */
    if(this.precoAlcool && this.precoGasolina) {

      var pAlcool = parseFloat(this.precoAlcool);
      var pGasolina = parseFloat(this.precoGasolina);

      /* Lógica: if pGasolina * 0,7 < pALcool : coloque alcool */
      var res = pAlcool / pGasolina

      if(res >= 0.7) {
        this.resultado = "Melhor utilizar Gasolina"
      }
      else {
        this.resultado = "Melhor utilizar Álcool"
      }

    }
    else {
      this.resultado ="Preencha todos os dois campos corretamente!"
    }
  }

  constructor() {}

}


