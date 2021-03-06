import { Component, OnInit } from '@angular/core';
import { Params,
  OnsNavigator,
  OnsenModule,
  NgModule,
  ViewChild,
  OnsLazyRepeat,
  } from 'angular2-onsenui';
import { Router } from '@angular/router';
import {MenuComponent} from './menu.component';

import {Dish} from './dish';
import {DishService} from './dish.service';
import { TSMap } from 'typescript-map';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'dishes-page',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Array<Dish>;
  selectedDish: string;
  private searchTerms = new Subject<string>();
  private added = false;
  private dishName = '';
  private ingredient = '';
  private _ingredients = [];
  title = 'All Recipes';
  menu_page = MenuComponent; 

  @ViewChild(OnsLazyRepeat) lazyRepeat;
  
  constructor(
    private router: Router,
    private dishService: DishService,
    private _navigator: OnsNavigator) { }

  getDishes(): void {
    this.dishes = this.dishService.getDishes();
  }
  ngOnInit(): void {
    this.getDishes();
    this._ingredients;
  }
  newDish(): void {
    this.added = !this.added;
    this._ingredients = [];
  }
  log(x: any): void {
    console.log(x);
  }
  add(name: string): void {
    name = name.trim();
    if (name) {
      this.dishService.add(name);
    };
    this.lazyRepeat.refresh();
  }
  delete(name: string): void {
    this.dishService.delete(name);
    this.lazyRepeat.refresh();
  }
  addIngredient(dishName: string, ingredient: string): void {
      console.log(dishName, ingredient);
    if (dishName && ingredient) {
      this.dishService.addIngredient(dishName, ingredient);
    }
  }
  deleteIngredient(dishName: string, ingredient: string): void {
    if (dishName && ingredient) {
      this.dishService.deleteIngredient(dishName, ingredient);
    }
  }
  trackByFn(index: number, ingredient: any):string {     
      return ingredient.name;
  }
  saveButton(): void {
    this._ingredients = [];
  }
  showIngredients(ingredient: string): any {
    this._ingredients.push(ingredient);
  }
  /*
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDish.id]);
    }
  add(name: string): void {
       name = name.trim();
       if(!name) {return;}
       this.dishService.update(name)
       .then(dish => {
           this.dishes.push(dish);
           this.selectedDish = null;
       });
   }
   delete(dish: Dish): void {
       this.dishService
       .delete(dish.id)
       .then(() => {
           this.dishes = this.dishes.filter(d => d !== dish);
           if(this.selectedDish === dish) {this.selectedDish = null;}
       });
   }
    search(term: string): void {
    this.searchTerms.next(term);
  } */
}