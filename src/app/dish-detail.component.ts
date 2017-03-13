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
            <h2>{{dish.name}} zutaten!</h2>
            <div>
                <label>Zutaten: </label>{{dish.ingredients }}
            </div>
            <button (click)="save()">Save</button>
            <button (click)="goBack()">Back</button>
        </div>
    `
})

export class DishDetailComponent implements OnInit{
    dish: Dish;

    constructor(
        private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.dishService.getDish(params['name']))
        .subscribe(dish => this.dish = dish);
    }

    goBack(): void {
        this.location.back();
    }/*
    save():void {
      this.dishService.update(this.dish)
        .then(() => this.goBack());
  }*/
}