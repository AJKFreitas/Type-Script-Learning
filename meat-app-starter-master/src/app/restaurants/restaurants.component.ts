import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';



@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
 
})
export class RestaurantsComponent implements OnInit {

 @Input() restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
      this.getRestaurants();
  }


    private getRestaurants() {
        this.restaurantsService.restaurants()
          .subscribe(
            restaurants => this.restaurants = restaurants
          );
    }
}
