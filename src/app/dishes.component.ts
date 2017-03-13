import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Dish} from './dish';
import {DishService} from './dish.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  moduleId: 'module.id',
  selector: 'my-dishes',
  templateUrl: './dishes.component.html'
  //styleUrls: ['./rezepte.component.css'],
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;
  private searchTerms = new Subject<string>();
  private added = false;
  private _ingredients = [];

  constructor(
      private router: Router,
      private dishService: DishService) {}

  getDishes():void {
    this.dishService
      .getDishes()
      .then(dishes => this.dishes = dishes);
  }
  ngOnInit():void {
    this.getDishes();
    /*this._dishes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.dishSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Dish[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Dish[]>([]);
      });*/
  }
  newDish(): void {
    this.added = !this.added;
  }
  add(name: string): void {
       name = name.trim();
       if(!name) {return;}
       this.dishService.create(name, this._ingredients);
   }
   delete(dish: Dish): void {
       this.dishService
       .delete(dish.name)
       .then(() => {
           this.dishes = this.dishes.filter(d => d !== dish);
           if(this.selectedDish === dish) {this.selectedDish = null;}
        });
    }
  newDishSave(name: string, ingredient: string): void {
    this.added = false;
    this.add(name);
    this._ingredients = [];

  }
  addNewIngredient(dishIngredient: string):void {
    if(!dishIngredient) {return;};
    this._ingredients.push(dishIngredient);
  }
  /*
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDish.id]);
    }
  add(name: string): void {
       name = name.trim();
       if(!name) {return;}
       this.dishService.create(name)
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