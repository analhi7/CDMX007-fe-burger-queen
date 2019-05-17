import { Injectable } from '@angular/core';



@Injectable()
export class BebidasService {

private bebidas:Bebidas []= [
    {
       nombre:"agua",
       precio:"$10",
       img:"assets/img/french-fries-2.png",
       
    },

    {
       nombre:"refresco",
       precio:"$15",
       img:"assets/img/beverage.png",
       
     },

     

]

constructor( ){
console.log("sirve el server3");
    }

getBebidas():Bebidas[]{
    return this.bebidas;
}
}

export interface Bebidas{
    nombre:string;
    precio:string;
    img:string;
    
};