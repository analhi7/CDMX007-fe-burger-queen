import { Component, OnInit } from '@angular/core';
import { ExtrasService, Extras } from '../../../servicios/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  extras : Extras [] = [];

  constructor(
    private _extrasService : ExtrasService
  ) {
    console.log("CONSTRUCTOR 4");
   }

  ngOnInit() {
    this.extras = this._extrasService.getExtras();
    console.log(this.extras)
  }

}
