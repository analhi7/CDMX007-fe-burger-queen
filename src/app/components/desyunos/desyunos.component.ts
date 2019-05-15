import { Component, OnInit } from '@angular/core';
import { DesayunoService, Desayuno } from '../../servicios/desayuno.service';

@Component({
  selector: 'app-desyunos',
  templateUrl: './desyunos.component.html',
  styleUrls: ['./desyunos.component.css']
})
export class DesyunosComponent implements OnInit {

  desayuno: Desayuno [] = [];

  constructor(
    private _desayunoService:DesayunoService
  ) { 
    console.log("CONSTRUCTOR");
  }

  ngOnInit() {
  this.desayuno = this._desayunoService.getDesayuno();
  console.log(this.desayuno)
  }

}
