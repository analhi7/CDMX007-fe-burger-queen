import { Injectable } from "@angular/core";


Injectable()
export class CuentaService{

    
    foodChoosen:any[]=[];
    total = 0;
    
    public totalAccount(component:object){
        this.foodChoosen.push(component);
        this.setTotal(this.getTotal()+this.foodChoosen[this.foodChoosen.length-1].acuenta);
        return this.foodChoosen;
    }

    public setTotal(totalCuenta){
        this.total = totalCuenta;
    }
    public getTotal(){
        return this.total;
    }


}