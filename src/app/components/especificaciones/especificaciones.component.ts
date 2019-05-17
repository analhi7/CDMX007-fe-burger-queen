import { Component, OnInit } from '@angular/core';
import { EspecificacionesService, Especificaciones } from '../../servicios/especificaciones.service';

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
    console.log("Constructor3");
   }

  ngOnInit() {
    this.especificaciones = this._especificacionesService.getEspecificaciones();
  console.log(this.especificaciones)
  }

}
