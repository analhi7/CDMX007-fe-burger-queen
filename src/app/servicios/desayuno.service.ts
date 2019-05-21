import { Injectable } from '@angular/core';


@Injectable()
export class DesayunoService {

private desayuno:Desayuno[]= [
    {
       id:"sandwich",
       nombre:"sándwich de jamón con queso",
       precio:"$35",
       img:"assets/img/sandwuich.png"
    },

    {
        id:"cafe",
        nombre:"café",
        precio:"$20",
        img:"assets/img/coffee.png"
     },

     {
        id:"cafeLe",
        nombre:"café con leche",
        precio:"$28",
        img:"assets/img/coffee.png"
     },

     {
        id:"jugo", 
        nombre:"jugo",
        precio:"$28",
        img:"assets/img/jugo.png"
     },

]

constructor( ){

    }

getDesayuno():Desayuno[]{
    return this.desayuno;
}
}

export interface Desayuno{
    id:string;
    nombre:string;
    precio:string;
    img:string;
};