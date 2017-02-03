import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {DishesComponent} from './dishes.component';
import {ListComponent} from './list.component';
import {DishDetailComponent} from './dish-detail.component';
import {DashboardComponent} from './dashboard.component';
import {DishService} from './dish.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DishesComponent,
    ListComponent,
    DishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }


