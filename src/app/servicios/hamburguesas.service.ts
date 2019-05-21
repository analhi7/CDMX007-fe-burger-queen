import { Injectable } from '@angular/core';


@Injectable()
export class HamburguesasService {

private hamburguesas:Hamburguesas[]= [
    {
       tamaño:"sencilla",
       tipo:"res",
       precio:"$40",
       img:"assets/img/sencilla.png"
    },

    {
        tamaño:"sencilla",
        tipo:"pollo",
        precio:"$40",
        img:"assets/img/sencilla.png"
     },

     {
        tamaño:"sencilla",
        tipo:"vegatariana",
        precio:"$40",
        img:"assets/img/sencilla.png"
     },

     {
       tamaño:"doble",
       tipo:"res",
       precio:"$55",
       img:"assets/img/hamburger.png"
     },

     {
        tamaño:"doble",
        tipo:"pollo",
        precio:"$55",
        img:"assets/img/hamburger.png"
      },
    
      {
        tamaño:"doble",
        tipo:"vegetariana",
        precio:"$55",
        img:"assets/img/hamburger.png"
      },

]

constructor( ){

    }

getHamburguesas():Hamburguesas[]{
    return this.hamburguesas;
}
}

export interface Hamburguesas{
    tamaño:string;
    tipo:string;
    precio:string;
    img:string;
};