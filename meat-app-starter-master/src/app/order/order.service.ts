import { Observable } from 'rxjs/Observable';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from 'app/order/order.model';
import { Http,RequestOptions,Headers } from '@angular/http';
import { MEAT_API } from 'app/app.api';

@Injectable() 

export class OrderService{
    constructor(private cartService:ShoppingCartService, private http :Http){}
    
    cartItens():CartItem[]{
        return this.cartService.items 
    }
    
    increaseQty(item:CartItem){
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }
    removeItem(item:CartItem){
        this.cartService.removeItem(item)
    }
    
    itemsValue(): number {
        return this.cartService.total()
    }
    clear(){
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type','application/json')
        return this.http.post(
                `${MEAT_API}/orders`,
                JSON.stringify(order), 
                new RequestOptions({headers: headers})
            ).map(response => response.json())
                .map(order => order.id)
        }
}