import{ RouterModule, Routes } from "@angular/router";

import { HomeComponent} from "./components/home/home.component";
import { NavbarComponent} from "./components/shared/navbar/navbar.component";
import { DesyunosComponent} from "./components/desyunos/desyunos.component";
import { HamburguesasComponent} from "./components/hamburguesas/hamburguesas.component";
import { EspecificacionesComponent} from "./components/especificaciones/especificaciones.component";
import { InicioComponent} from "./components/inicio/inicio.component";
import { NameComponent} from "./components/name/name.component";
import { GuarnicionComponent } from './components/hamburguesas/guarnicion/guarnicion.component';
import { ExtrasComponent } from './components/hamburguesas/extras/extras.component';
import { BebidasComponent } from './components/hamburguesas/bebidas/bebidas.component';




const app_routes: Routes = [
    {path:"home", component:HomeComponent },
    {path:"navbar", component:NavbarComponent },
    {path:"desayunos", component:DesyunosComponent },
    {path:"hamburguesas", component:HamburguesasComponent },
    {path:"especificaciones", component:EspecificacionesComponent },
    {path:"inicio", component:InicioComponent },
    {path:"name", component:NameComponent },
    {path:'hamburguesas/extras', component:ExtrasComponent },
    {path:"hamburguesas/bebidas", component:BebidasComponent },
    {path:"hamburguesas/guarniciones", component:GuarnicionComponent },
    // {path:"**", pathMatch:"full", redirectTo:"home"}

];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});