import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  // Otherwise, inline-styling
  /* styles: [`
  h1 {
      color: red;
      text-align: center;
  }`] */
})
export class AppComponent {
  title = 'angular-app';
}
