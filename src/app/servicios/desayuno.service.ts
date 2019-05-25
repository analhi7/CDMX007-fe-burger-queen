import { Injectable } from '@angular/core';


@Injectable()
export class DesayunoService {

private desayuno:Desayuno[]= [
    {
        nombre:"sandwich de jamón con queso",
        id:"sandwich",
       comida:"sándwich",
       precio:"$35",
       img:"assets/img/sandwuich.png",
       acuenta:35
    },

    {
        nombre:"café",
        id:"cafe",
        comida:"café",
        precio:"$20",
        img:"assets/img/coffee.png",
        acuenta:20

     },

     {
        nombre:"café con leche",
        id:"cafeLe",
        comida:"café con l",
        precio:"$28",
        img:"assets/img/coffee.png",
        acuenta:28
     },

     {
        nombre:"jugos",
        id:"jugo", 
        comida:"jugo",
        precio:"$28",
        img:"assets/img/jugo.png",
        acuenta:28
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
    comida:string;
    precio:string;
    img:string;
    acuenta:number;
};