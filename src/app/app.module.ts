import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TicketComponent } from './components/shared/ticket/ticket.component';
import { HomeComponent } from './components/home/home.component';
import { DesyunosComponent } from './components/desyunos/desyunos.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { EspecificacionesComponent } from './components/especificaciones/especificaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NameComponent } from './components/name/name.component';
import { GuarnicionComponent } from './components/hamburguesas/guarnicion/guarnicion.component';
import { ExtrasComponent } from './components/hamburguesas/extras/extras.component';
import { BebidasComponent } from './components/hamburguesas/bebidas/bebidas.component';



//Servicios
import { DesayunoService } from './servicios/desayuno.service';
import { HamburguesasService } from './servicios/hamburguesas.service';
import { EspecificacionesService } from './servicios/especificaciones.service';
import { ExtrasService } from './servicios/extras.service';
import { GuarnicionesService } from './servicios/guarniciones.service';
import { BebidasService } from './servicios/bebidas.service';
import { NombreService } from './servicios/nombre.service';

//Rutas
import{ app_routing } from "./app.routes";





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketComponent,
    HomeComponent,
    DesyunosComponent,
    HamburguesasComponent,
    EspecificacionesComponent,
    InicioComponent,
    NameComponent,
    GuarnicionComponent,
    ExtrasComponent,
    BebidasComponent,
  
   
  ],
  imports: [
    BrowserModule,
    app_routing,
   
  ],
  providers: [
    DesayunoService,
    HamburguesasService,
    EspecificacionesService,
    ExtrasService,
    GuarnicionesService,
    BebidasService,
    NombreService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
