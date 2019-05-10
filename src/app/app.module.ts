import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TicketComponent } from './components/shared/ticket/ticket.component';
import { HomeComponent } from './components/home/home.component';


//Servicios

//Rutas
import{ app_routing } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    app_routing,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
