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

   }

   component:object;


  ngOnInit() {
    this.hamburguesas = this._hamburguesasService.getHamburguesas();
  }

  public searchComponent(index){
  this.hamburguesas.forEach(element => {
  if(this.hamburguesas.indexOf(element)== index){
 this.component= element;
 console.log(this.component)
  }
  })
  
  }
   
  }


