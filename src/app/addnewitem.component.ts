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
    dishName: string = "";
    ingredientInput: any;

    _ingredients = [{name: 'one'}, {name: 'two'}];

    constructor(
        private dishService: DishService,
        private location: Location
        ) {}

    ngOnInit():void {
      this.ingredientInput.value = "";
    }
    add(): void {        
        this._ingredients = [];
    }
    addIngredient(dishName: string): void {
      this._ingredients.push({name: this.ingredientInput.value});

      if (dishName && this.ingredientInput.value) {
        this.dishService.addIngredient(dishName, this.ingredientInput.value);
        this.ingredientInput.value = '';
      }
    }
    goBack(): void {
      this.location.back();
    }
    trackByFn(index: number, ingredient: any):string {     
        return ingredient.name;
    }
}