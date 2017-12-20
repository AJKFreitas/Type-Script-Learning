import { AboutComponent } from 'app/about/about.component';
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { Routes } from "@angular/router/router";
import { HomeComponent } from "app/home/home.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";

export const ROUTES: Routes = [

    {path: '', component:HomeComponent},
    {path:'restaurants', component: RestaurantsComponent},
    {path:'restaurants/:id', component: RestaurantDetailComponent,
        children:[
            {path: '', redirectTo: 'menu',pathMatch:'full'},
            {path:'menu', component: MenuComponent},
            {path:'reviews', component: ReviewsComponent}
        ]    
    },
    {path: 'order', component: OrderComponent},
    {path: 'order-summary', component: OrderSumaryComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'}
    
]