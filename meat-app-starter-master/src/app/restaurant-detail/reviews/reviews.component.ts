import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ReviewModel } from './review.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  @Input()
  review: ReviewModel;
  reviews: Observable<any>;

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
    .reviewOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
