import { Component, OnInit, Input } from '@angular/core';
import { NombreService } from '../../servicios/nombre.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  mostrar:true;
 constructor(private _nombreService : NombreService){

 }

ngOnInit(){

}

public buscarCliente(){
 this._nombreService.mostrarCliente(event);
}



}
