import { Injectable } from '@angular/core';



@Injectable()
export class BebidasService {

private bebidas:Bebidas []= [
    {
       comida:"agua",
       precio:"$10",
       img:"assets/img/agua.png",
       acuenta:15,
       
    },

    {
       comida:"refresco",
       precio:"$15",
       img:"assets/img/beverage.png",
       acuenta:15,
     },

     

]

constructor( ){
    }

getBebidas():Bebidas[]{
    return this.bebidas;
}
}

export interface Bebidas{
    comida:string;
    precio:string;
    img:string;
    acuenta:number;
    
};