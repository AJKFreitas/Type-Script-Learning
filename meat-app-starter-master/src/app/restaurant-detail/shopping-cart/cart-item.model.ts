import { MenuItem } from "app/restaurant-detail/menu-item/menu.item.model";

export class CartItem{
    constructor(private menuItem: MenuItem, private quatity:number =1){

    }
    value(){
        return this.menuItem.price * this.quatity
    }
}