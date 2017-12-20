import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/order/order.service';
import { Order, OrderItem } from 'app/order/order.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {


  orderForm: FormGroup


  delivery :number = 8

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ];

  constructor(private orderService:OrderService,
               private router: Router,
              private formBuider: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuider.group({
      name:this.formBuider.control(''),
      email:this.formBuider.control(''),
      emailConfirmation:this.formBuider.control(''),
      address: this.formBuider.control(''),
      number:this.formBuider.control(''),
      optional:this.formBuider.control(''),
      paymentOption:this.formBuider.control('')
    })
  }

  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItens():CartItem[]{
    return this.orderService.cartItens()
  }

  increaseQty(item:CartItem){
    this.orderService.increaseQty(item)
  }
  
  decreaseQty(item:CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item:CartItem){
    this.orderService.removeItem(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItens()
          .map((item:CartItem)=> new OrderItem(item.quantity,item.menuItem.id))
                  this.orderService.checkOrder(order)
                  .subscribe((orderId:string)=>{
                    this.router.navigate(['/order-summary'])
                    console.log(`Compra concluida: ${orderId}`)
                    this.orderService.clear()  
                  }
              )
          console.log(order);
    
  }
}