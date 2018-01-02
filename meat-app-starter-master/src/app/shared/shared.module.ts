import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { InputComponent } from 'app/shared/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from 'app/shared/messages/notification.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [InputComponent, RadioComponent,RatingComponent, SnackbarComponent],
  exports:[
            InputComponent, RadioComponent,RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule,SnackbarComponent
          ]
  
})
export class SharedModule { 

  static forRoot():ModuleWithProviders{
    return {
      ngModule:SharedModule,
      providers:[ShoppingCartService, RestaurantsService, OrderService, NotificationService]
    }
  }
}
