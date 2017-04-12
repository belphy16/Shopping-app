import { Component } from '@angular/core';
import {AddNewItem} from './addnewitem.component';
import {MenuComponent} from './menu.component';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Einkaufsliste';
}
