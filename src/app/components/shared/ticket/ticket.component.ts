import { Component, OnInit } from '@angular/core';
import { NombreService } from '../../../servicios/nombre.service';
import { CuentaService } from '../../../servicios/cuenta.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor( private nombreService : NombreService,
    private _cuentaService: CuentaService) { }

  ngOnInit(

  ) {
    
  }

}
