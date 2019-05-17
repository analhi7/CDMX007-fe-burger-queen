import { Component, OnInit } from '@angular/core';
import { HamburguesasService, Hamburguesas } from '../../servicios/hamburguesas.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {
   
  hamburguesas: Hamburguesas [] = [];

  constructor(
    private _hamburguesasService : HamburguesasService
    ) {
      console.log("CONSTRUCTOR");
   }

  ngOnInit() {
    this.hamburguesas = this._hamburguesasService.getHamburguesas();
  console.log(this.hamburguesas)
  }

}
