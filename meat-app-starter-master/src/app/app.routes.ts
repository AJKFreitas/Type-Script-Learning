import { Routes } from "@angular/router/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";

export const ROUTES: Routes = [

    {path: '', component:HomeComponent},
    {path:'about',component: AboutComponent}
    
]