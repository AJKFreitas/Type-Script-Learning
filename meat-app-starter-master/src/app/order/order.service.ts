import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService{
    constructor(private cartService:ShoppingCartService){}
    
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
}