import { Component, OnInit } from '@angular/core';
import { NombreService } from '../../../servicios/nombre.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor( private nombreService : NombreService) { }

  ngOnInit() {
  }

}
