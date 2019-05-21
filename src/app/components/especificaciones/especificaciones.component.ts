import { Component, OnInit } from '@angular/core';
import { EspecificacionesService, Especificaciones } from '../../servicios/especificaciones.service';
import { ObjectOrientedRenderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css']
})
export class EspecificacionesComponent implements OnInit {

  especificaciones: Especificaciones[] = [];
  constructor(
    private _especificacionesService : EspecificacionesService
  ) {
   }


  component:Object;


  ngOnInit() {
    this.especificaciones = this._especificacionesService.getEspecificaciones();
  }


public searchComponent(index){
  this.especificaciones.forEach(element=>{
    if(this.especificaciones.indexOf(element)== index){
      this.component= element;
      console.log(this.component)

    }

  })
}




}
