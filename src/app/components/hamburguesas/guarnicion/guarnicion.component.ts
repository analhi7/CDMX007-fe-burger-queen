import { Component, OnInit } from '@angular/core';
import { GuarnicionesService, Guarniciones } from '../../../servicios/guarniciones.service';
import { CuentaService } from '../../../servicios/cuenta.service';


@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {

  guarniciones :Guarniciones [] = [];
  component:object;

  constructor(
    private _guarnicionesService : GuarnicionesService,
    private _cuentaService : CuentaService,
  ) {
    
   }

  ngOnInit() {
    this.guarniciones = this._guarnicionesService.getGuarniciones();
   
  }

  public searchComponent(index){
    this.guarniciones.forEach(element => {
      if(this.guarniciones.indexOf(element)==index){
        this.component= element;
        this._cuentaService.totalAccount(this.component);
      }
      
    });
  }

}
