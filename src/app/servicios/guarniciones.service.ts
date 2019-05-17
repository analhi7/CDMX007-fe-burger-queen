import { Injectable } from '@angular/core';



@Injectable()
export class GuarnicionesService {

private guarniciones:Guarniciones[]= [
    {
       nombre:"papas fritas",
       precio:"$15",
       img:"assets/img/french-fries-2.png",
       
    },

    {
       nombre:"aros e cebolla",
       precio:"$15",
       img:"assets/img/onion-rings.png",
       
     },

     

]

constructor( ){
console.log("sirve el server3");
    }

getGuarniciones():Guarniciones[]{
    return this.guarniciones;
}
}

export interface Guarniciones{
    nombre:string;
    precio:string;
    img:string;
    
};