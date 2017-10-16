import { ReviewModel } from './review.model';

import { ErrorHandler } from './../../app.error-handler';
import { MEAT_API } from './../../app.api';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ReviewService{
    constructor(private http: Http){}

    reviewsById(id: string):Observable<ReviewModel[]>{
        return this.http.get(`${MEAT_API}/review/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

}