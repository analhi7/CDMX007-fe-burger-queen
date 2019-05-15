import { Injectable } from '@angular/core';


@Injectable()
export class DesayunoService {

private desayuno:Desayuno[]= [
    {
       nombre:"sándwich de jamón con queso",
       precio:"$35",
       img:"assets/img/sandwuich.png"
    },

    {
        nombre:"café",
        precio:"$20",
        img:"assets/img/coffee.png"
     },

     {
        nombre:"café con leche",
        precio:"$28",
        img:"assets/img/coffee.png"
     },

     {
        nombre:"café con leche",
        precio:"$28",
        img:"assets/img/jugo.png"
     },

]

constructor( ){
console.log("sirve el server");
    }

getDesayuno():Desayuno[]{
    return this.desayuno;
}
}

export interface Desayuno{
    nombre:string;
    precio:string;
    img:string;
};