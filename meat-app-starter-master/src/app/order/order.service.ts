import { Observable } from 'rxjs/Observable';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from 'app/order/order.model';
import { HttpClient} from '@angular/common/http';
import { MEAT_API } from 'app/app.api';

@Injectable() 

export class OrderService{
    constructor(private cartService:ShoppingCartService, private http :HttpClient){}
    
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
        return this.http.post<Order>(`${MEAT_API}/orders`,order)
                .map(order => order.id)
        }
}