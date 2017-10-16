import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService, 
                 private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurantByid(this.getParamSnapshot())
  }

  getRestaurantByid(id:string){
    this.restaurantsService.restaurantById(id).subscribe(
      restaurant => this.restaurant = restaurant
    );
  }

  getParamSnapshot():string{
    return this.route.snapshot.params['id'];
  }

  getParamParentSnapshot():string{
    return this.route.parent.snapshot.params['restaurantId'];
  }

}
