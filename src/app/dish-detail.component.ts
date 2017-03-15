import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component ({
  moduleId: 'module.id',
    selector: 'dish-detail',
    template: `
        <div *ngIf="dish">
            <label>name: </label>
            <input [(ngModel)]="dish.name" />
            <div>
                <label>Zutaten: </label>
                    <ul>
                        <li *ngFor="let ingredient of dish.ingredients">                        
                            <input [(ngModel)]="ingredient.value"/>
                        </li>
                    </ul>
            </div>
            <button (click)="save()">Save</button>
            <button (click)="goBack()">Back</button>
        </div>
    `
})

export class DishDetailComponent implements OnInit{
    dish: any;
    private _ingredients = []

    constructor(
        private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.dishService.getDish(params['name']))
        .subscribe(dish => { 
            this.dish = {
                name: dish.name,
                ingredients: dish.ingredients.map(item => ({value: item}))
            };
        });
    }
    goBack(): void {
        this.location.back();
    }
    save():void {
        this.dishService.updateDish(this.dish.name, {
            name: this.dish.name,
            ingredients: this.dish.ingredients.map(item => item.value),
            add: false
        }); 
        this.goBack();
  }
}