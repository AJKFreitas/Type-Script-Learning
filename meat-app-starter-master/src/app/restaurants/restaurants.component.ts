import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import {trigger, state, style, transition, animate} from "@angular/animations";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
 animations:[
   trigger('toggleSearch', [
     state('hidden', style({
       opacity: 0,
       "max-hight": "0px",
       "margin-top": "0px"
     })),
     state('visible', style({
       opacity: 1,
       "max-height": "70px",
       "margin-top": "20px"
     })),
     transition('* => *', animate('250ms 0s ease-in-out'))
   ])
 ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
 @Input() restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl:FormControl

  constructor(private restaurantsService: RestaurantsService,
                      private fb:FormBuilder) { }

  ngOnInit() {
    
      this.searchControl = this.fb.control('')
      this.searchForm = this.fb.group({
        searchControl : this.searchControl
      })

      this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchTerm => // controla o tempo de resquisição da web 
          this.restaurantsService.restaurants(searchTerm)
        .catch(error => Observable.from([])))
        .subscribe(restaurants => this.restaurants = restaurants)
      this.getRestaurants();
  }


    private getRestaurants() {
        this.restaurantsService.restaurants()
          .subscribe(
            restaurants => this.restaurants = restaurants
          );
    }

    toggleSearch(){
      this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }
}
