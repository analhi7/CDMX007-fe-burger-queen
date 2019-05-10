import{ RouterModule, Routes } from "@angular/router";

import { HomeComponent} from "./components/home/home.component"
import { NavbarComponent} from "./components/shared/navbar/navbar.component"


const app_routes: Routes = [
    {path:"home", component:HomeComponent },
    {path:"navbar", component:NavbarComponent },
    {path:"**", pathMatch:"full", redirectTo:"home"}

];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});