import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { Student } from "./model/student";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia', isJedi: false }
  ]
}

