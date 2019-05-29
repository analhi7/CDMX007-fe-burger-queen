import { Component, OnInit } from '@angular/core';
import { CuentaService} from "../../servicios/cuenta.service";


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  constructor(private _cuentaService:CuentaService) { }

  ngOnInit() {

  }

  // firebase(){
  //   this._cuentaService.goFirebase();
  // }
}
