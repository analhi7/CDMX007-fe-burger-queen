import { Injectable } from '@angular/core';

 
@Injectable()
export class NombreService {
  
  nombre : string;
  
  constructor() { }
 
  public mostrarCliente(event){
      this.nombre = event.target.value;
      console.log(this.nombre)
    return this.nombre;
   
  }


}