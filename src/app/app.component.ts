import { Component } from '@angular/core';
import { Params,
  OnsNavigator,
  OnsenModule,
  NgModule
  } from 'angular2-onsenui';
import {AddNewItemComponent} from './add-new-item.component';
import {MenuComponent} from './menu.component';
import {DishesComponent} from './dishes.component';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'Einkaufsliste';
  slidingPage = SlidingMenuComponent;
  menu_page = MenuComponent;*/
  page = DishesComponent; 
}
