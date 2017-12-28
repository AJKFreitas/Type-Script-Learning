import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from "app/header/header.component";
import { HomeComponent } from "app/home/home.component";
import { ROUTES } from "app/app.routes";
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantComponent } from 'app/restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component';
import { SharedModule } from 'app/shared/shared.module';
import { PreloadAllModules } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules})
  ],
  providers: [CoreModule , {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
