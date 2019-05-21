import { Component, OnInit } from '@angular/core';
import { DesayunoService, Desayuno } from '../../servicios/desayuno.service';
import { ObjectOrientedRenderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { element } from '@angular/core/src/render3';

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
  }
 
  component:Object;

  ngOnInit() {
  this.desayuno = this._desayunoService.getDesayuno();
 
  }

  public searchComponent(index){
    this.desayuno.forEach(element=>{
      if(this.desayuno.indexOf(element)== index){
        this.component=element;
        console.log(this.component)
      }

    }

    )
  }

}
