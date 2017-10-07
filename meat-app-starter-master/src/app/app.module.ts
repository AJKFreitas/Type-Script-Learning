import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from "app/header/header.component";
import { HomeComponent } from "app/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
