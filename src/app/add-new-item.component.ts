import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component ({
  moduleId: 'module.id',
  selector: 'add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})

export class AddNewItemComponent {
    dishName: string = "";
    ingredient: string = "";
    private _ingredients = [];

    constructor(
        private dishService: DishService,
        private location: Location
    ){}


    goBack(): void {
        this.location.back();
    }
    addIngredient(dishName: string, ingredient:string): void {
      this._ingredients.push(ingredient);

      if (dishName && ingredient) {
        this.dishService.addIngredient(dishName, ingredient);
      }
    }

    add(): void {        
        this._ingredients = [];
    }
}