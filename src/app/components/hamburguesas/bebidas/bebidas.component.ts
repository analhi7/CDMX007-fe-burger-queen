import { Component, OnInit } from '@angular/core';
import { BebidasService, Bebidas } from '../../../servicios/bebidas.service';
import { CuentaService } from '../../../servicios/cuenta.service';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {


 bebidas : Bebidas [] = [];

  constructor(
    private _bebidasService : BebidasService,
    private _cuentaService: CuentaService
  ) {
   }

component:object;

  ngOnInit() {
    this.bebidas = this._bebidasService.getBebidas();
  }

public searchComponent(index){
  this.bebidas.forEach(element => {
    if(this.bebidas.indexOf(element)==index){
      this.component=element;
      this._cuentaService.totalAccount(this.component);
    }
    
  });
}



}
