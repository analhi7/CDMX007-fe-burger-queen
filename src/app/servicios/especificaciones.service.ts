import { Injectable } from '@angular/core';


@Injectable()
export class EspecificacionesService {

private especificaciones:Especificaciones[]= [
    {
       nombre:"cebolla",
       img:"assets/img/onion.png"
    },

    {
       nombre:"pepinillos",
       img:"assets/img/pickle.png"
     },

     {
        nombre:"tomate",
        img:"assets/img/tomato.png"
     },

     {
       nombre:"lechuga",
       img:"assets/img/lettuce.png"
     },

     {
        nombre:"aderezos",
        img:"assets/img/sauce-bottle.png"
      },
    
      {
       nombre:"queso",
       img:"assets/img/cheese-1.png"
      },

]

constructor( ){
console.log("sirve el server3");
    }

getEspecificaciones():Especificaciones[]{
    return this.especificaciones;
}
}

export interface Especificaciones{
    nombre:string;
    img:string;
};