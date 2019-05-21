import { Injectable } from "@angular/core";


Injectable()
export class CuentaService{

    
    foodChoosen:any[]=[];
    total:number = 0;

    public totalAccount(component:object){
        this.foodChoosen.push(component);
        return this.foodChoosen;
    }


}