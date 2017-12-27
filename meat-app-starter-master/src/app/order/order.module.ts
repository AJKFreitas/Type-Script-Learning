import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItensComponent } from 'app/order/order-itens/order-itens.component';
import { DeliveryCostsComponent } from 'app/order/delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
  {path:'',component:OrderComponent}
]

@NgModule({
  imports: [
     SharedModule, RouterModule.forChild(ROUTES)
  ],
  declarations: [OrderComponent, OrderItensComponent,
                  DeliveryCostsComponent
                ]
})
export class OrderModule { }
