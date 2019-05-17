import { Component, OnInit } from '@angular/core';
import { GuarnicionesService, Guarniciones } from '../../../servicios/guarniciones.service';

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {

  guarniciones : Guarniciones [] = [];

  constructor(
    private _guarnicionesService : GuarnicionesService
  ) {
    console.log("CONSTRUCTOR 4");
   }

  ngOnInit() {
    this.guarniciones = this._guarnicionesService.getGuarniciones();
    console.log(this.guarniciones)
  }

}
