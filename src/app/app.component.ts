import { Component,AfterViewInit } from '@angular/core';
import { myNewFunctions } from './my-new-component/myNewFunctions';


@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
  <div>
      <nav class='navbar navbar-default'>
          <div class='container-fluid'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/welcome']">Home</a></li>
                  <li><a [routerLink]="['/mynew']">Explore Page</a></li>
              </ul>
          </div>
      </nav>
      <div class='container'>
          <router-outlet></router-outlet>
      </div>
   </div>
  `

})
export class AppComponent {
  title = 'Explore Page';

  constructor(){ }


}


