import { Component, OnInit } from '@angular/core';
import { DesayunoService, Desayuno } from '../../servicios/desayuno.service';
import { CuentaService } from '../../servicios/cuenta.service';


@Component({
  selector: 'app-desyunos',
  templateUrl: './desyunos.component.html',
  styleUrls: ['./desyunos.component.css']
})
export class DesyunosComponent implements OnInit {

  desayuno: Desayuno [] = [];
  
  constructor(
    private _desayunoService:DesayunoService,
    private _cuentaService: CuentaService
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
        console.log(this._cuentaService.totalAccount(this.component));
      }

    }

    )
  }

}
