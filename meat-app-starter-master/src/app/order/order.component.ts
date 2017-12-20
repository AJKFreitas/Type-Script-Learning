import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/order/order.service';
import { Order, OrderItem } from 'app/order/order.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

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
      name:this.formBuider.control('',[Validators.required, Validators.minLength(5)]),
      email:this.formBuider.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation:this.formBuider.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      address: this.formBuider.control('',[Validators.required,Validators.minLength(5)]),
      number:this.formBuider.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optional:this.formBuider.control(''),
      paymentOption:this.formBuider.control('',[Validators.required])
    },{validator:OrderComponent.equalsTo})
  }

  static equalsTo(group:AbstractControl): {[key:string]:boolean}{
    
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || ! emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailNotMatch:true}
    }
    return undefined
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