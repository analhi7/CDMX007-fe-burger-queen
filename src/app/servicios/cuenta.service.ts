import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { NombreService} from '../servicios/nombre.service';


Injectable({
    providedIn: 'root',
})
export class CuentaService{   
constructor( /*private nombreService:NombreService,
             private angularFirestore: AngularFirestore*/  ){

}
    
    foodChoosen:any[]=[];
    total:number = 0;

    public totalAccount(component:object){
        this.foodChoosen.push(component);
        this.setTotal(this.getTotal()+this.foodChoosen[this.foodChoosen.length-1].acuenta);
        return this.foodChoosen;
    }

    public setTotal(totalCuenta:number){
        this.total = totalCuenta;
    }
    public getTotal(){
        return this.total;
    }



    // public goFirebase(){
    // this.angularFirestore.collection("ticket").add({
    //     nombre: this.nombreService.nombre,
    //     order: this.foodChoosen
    // })

    // .then(function(){
    //     console.log("HOLi, funcionas?")
    // })
    // .catch(function(error){
    //     console.log(error)
    // })
    // }

}