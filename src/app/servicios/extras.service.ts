import { Injectable } from '@angular/core';



@Injectable()
export class ExtrasService {

private extras:Extras[]= [
    {
       nombre:"huevo",
       precio:"$15",
       img:"assets/img/egg-5.png",
       
    },

    {
       nombre:"queso",
       precio:"$15",
       img:"assets/img/cheese-2.png",
       
     },

     

]

constructor( ){

    }

getExtras():Extras[]{
    return this.extras;
}
}

export interface Extras{
    nombre:string;
    precio:string;
    img:string;
    
};