import { Injectable } from '@angular/core';



@Injectable()
export class GuarnicionesService {

private guarniciones:Guarniciones[]= [
    {
        nombre:"papas fritas",
       comida:"papas f",
       precio:"$15",
       img:"assets/img/french-fries-2.png",
       acuenta:15,
       
    },

    {
       nombre:"aros de cebolla",
       comida:"aros c",
       precio:"$15",
       img:"assets/img/onion-rings.png",
       acuenta:15,
       
     },

     

]

constructor( ){
    }

getGuarniciones():Guarniciones[]{
    return this.guarniciones;
}
}

export interface Guarniciones{
    nombre:string;
    comida:string;
    precio:string;
    img:string;
    acuenta:number;
    
};