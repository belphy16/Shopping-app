import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component({
    moduleId: 'module.id',
    selector: 'add-new-item',
    templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.css']
})

export class AddNewItemComponent implements OnInit{
    dishes: Array<Dish>;

    private _ingredients = [];

    constructor(
        private dishService: DishService,
        private location: Location
        ) {}

    ngOnInit():void {
       
    }
    add(): void {        
        this._ingredients = [];
    }
  addIngredient(dishName: string, ingredient: string): void {
      console.log(dishName, ingredient);
    if (dishName && ingredient) {
      this.dishService.addIngredient(dishName, ingredient);
    }
  }
  showIngredients(ingredient: string): any {
    this._ingredients.push(ingredient);
  }
    goBack(): void {
        this.location.back();
    }
}