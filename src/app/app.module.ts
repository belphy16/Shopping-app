import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import {DishesComponent} from './dishes.component';
import {ListComponent} from './list.component';
import {DishDetailComponent} from './dish-detail.component';
import {DashboardComponent} from './dashboard.component';
import {DishService} from './dish.service';
import {DishSearchComponent} from'./dish-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DishesComponent,
    ListComponent,
    DishDetailComponent,
    DishSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }


