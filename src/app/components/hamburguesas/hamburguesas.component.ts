import { Component, OnInit } from '@angular/core';
import { HamburguesasService, Hamburguesas } from '../../servicios/hamburguesas.service';
import { CuentaService } from '../../servicios/cuenta.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
   
  hamburguesas: Hamburguesas [] = [];
  component:object;

  constructor(
    private _hamburguesasService : HamburguesasService,
    private _cuentaService: CuentaService

    ) {

   }

   


  ngOnInit() {
    this.hamburguesas = this._hamburguesasService.getHamburguesas();
  }

  public searchComponent(index){
  this.hamburguesas.forEach(element => {
  if(this.hamburguesas.indexOf(element)== index){
 this.component= element;
console.log(this._cuentaService.totalAccount(this.component));
  }
  })
  
  }
   
  }


