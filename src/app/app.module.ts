import {OnsenModule} from 'angular2-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import {DishesComponent} from './dishes.component';
import {ListComponent} from './list.component';
import {DishDetailComponent} from './dish-detail.component';
import {DishService} from './dish.service';
import {DishSearchComponent} from'./dish-search.component';
import {AddNewItemComponent} from './add-new-item.component';
import {MenuComponent} from './menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    ListComponent,
    DishDetailComponent,
    DishSearchComponent,
    AddNewItemComponent,
    MenuComponent,
  ],
  imports: [
    OnsenModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  entryComponents: [
    MenuComponent
  ],
  providers: [DishService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


