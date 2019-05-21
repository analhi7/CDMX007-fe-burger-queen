import { Injectable } from '@angular/core';



@Injectable()
export class BebidasService {

private bebidas:Bebidas []= [
    {
       nombre:"agua",
       precio:"$10",
       img:"assets/img/agua.png",
       
    },

    {
       nombre:"refresco",
       precio:"$15",
       img:"assets/img/beverage.png",
       
     },

     

]

constructor( ){
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