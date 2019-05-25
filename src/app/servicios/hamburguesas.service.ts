import { Injectable } from '@angular/core';


@Injectable()
export class HamburguesasService {

  private hamburguesas: Hamburguesas[] = [
    {
      comida: "h res s",
      tamaño: "sencilla",
      tipo: "res",
      precio: "$40",
      img: "assets/img/sencilla.png",
      acuenta: 40,
    },

    {
      comida: "h pollo s",
      tamaño: "sencilla",
      tipo: "pollo",
      precio: "$40",
      img: "assets/img/sencilla.png",
      acuenta: 40,
    },

    {
      comida: "h vegetariana s",
      tamaño: "sencilla",
      tipo: "vegatariana",
      precio: "$40",
      img: "assets/img/sencilla.png",
      acuenta: 40,
    },

    {
      comida: "h res d",
      tamaño: "doble",
      tipo: "res",
      precio: "$55",
      img: "assets/img/hamburger.png",
      acuenta: 55,
    },

    {
      comida: "h pollo d",
      tamaño: "doble",
      tipo: "pollo",
      precio: "$55",
      img: "assets/img/hamburger.png",
      acuenta: 55,
    },

    {
      comida: "h vegetariana d",
      tamaño: "doble",
      tipo: "vegetariana",
      precio: "$55",
      img: "assets/img/hamburger.png",
      acuenta: 55,
    },

  ]

  constructor() {

  }

  getHamburguesas(): Hamburguesas[] {
    return this.hamburguesas;
  }
}

export interface Hamburguesas {
  comida: string;
  tamaño: string;
  tipo: string;
  precio: string;
  img: string;
  acuenta: number;
};