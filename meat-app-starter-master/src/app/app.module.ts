import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from "app/header/header.component";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from 'app/about/about.component';
import { ROUTES } from "app/app.routes";
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
<<<<<<< HEAD
    AboutComponent,
    RestaurantsComponent

=======
    AboutComponent
>>>>>>> 67a00ed228897c4885511c0b3fc18b3b128e45ac
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule.forRoot(ROUTES)
=======
    RouterModule
>>>>>>> 67a00ed228897c4885511c0b3fc18b3b128e45ac
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
