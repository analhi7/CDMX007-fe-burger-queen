import { Component, OnInit } from '@angular/core';
import { ExtrasService, Extras } from '../../../servicios/extras.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  extras : Extras [] = [];
  component:object;

  constructor(
    private _extrasService : ExtrasService
  ) {
    
   }



  ngOnInit() {
    this.extras = this._extrasService.getExtras();
   
  }
 
  public searchComponent(index){
    this.extras.forEach(element => {
      if(this.extras.indexOf(element)==index){
        this.component=element;
        console.log(this.component)
      }
      
    });
  }


}
