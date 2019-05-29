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
import { OrdenComponent } from './components/orden/orden.component';



//Servicios
import { DesayunoService } from './servicios/desayuno.service';
import { HamburguesasService } from './servicios/hamburguesas.service';
import { EspecificacionesService } from './servicios/especificaciones.service';
import { ExtrasService } from './servicios/extras.service';
import { GuarnicionesService } from './servicios/guarniciones.service';
import { BebidasService } from './servicios/bebidas.service';
import { NombreService } from './servicios/nombre.service';
import { CuentaService } from './servicios/cuenta.service';

// firebase
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule , AngularFirestore } from '@angular/fire/firestore';


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
    OrdenComponent,
  
   
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    

   
  ],
  providers: [
    DesayunoService,
    HamburguesasService,
    EspecificacionesService,
    ExtrasService,
    GuarnicionesService,
    BebidasService,
    NombreService,
    CuentaService,
    AngularFirestore,
    AngularFirestoreModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
