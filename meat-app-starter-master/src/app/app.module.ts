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
import { RestaurantComponent } from 'app/restaurants/restaurant/restaurant.component';
import { RestaurantsService } from 'app/restaurants/restaurants.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
