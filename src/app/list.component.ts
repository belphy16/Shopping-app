import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dish} from './dish';

import {DishService} from './dish.service';
//import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'my-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    //providers: [DishService]
})

export class ListComponent implements OnInit {
    ingredients: Array<string>;

    constructor(private dishService: DishService) {
    }

    getDishes(): void {
        this.ingredients = this.dishService.getIngredientsCounted();
        console.log(this.ingredients);
    }

    ngOnInit(): void {
        this.getDishes();
    }    
}