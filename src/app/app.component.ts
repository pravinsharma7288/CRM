import { Component } from '@angular/core';
import { signupElement } from './signup-data/signupElement';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataFound(){
  console.log(signupElement);
 }
}
