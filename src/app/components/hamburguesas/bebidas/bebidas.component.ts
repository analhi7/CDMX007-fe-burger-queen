import { Component, OnInit } from '@angular/core';
import { BebidasService, Bebidas } from '../../../servicios/bebidas.service';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {


 bebidas : Bebidas [] = [];

  constructor(
    private _bebidasService : BebidasService
  ) {
    console.log("CONSTRUCTOR 5");
   }

  ngOnInit() {
    this.bebidas = this._bebidasService.getBebidas();
    console.log(this.bebidas)
  }

}
