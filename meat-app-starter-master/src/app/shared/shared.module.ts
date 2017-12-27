import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { InputComponent } from 'app/shared/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [InputComponent, RadioComponent,RatingComponent],
  exports:[
            InputComponent, RadioComponent,RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule
          ]
  
})
export class SharedModule { }
