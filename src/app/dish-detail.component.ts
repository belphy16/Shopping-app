import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component ({
  moduleId: 'module.id',
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html'
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
            .switchMap((params: Params) => Promise.resolve(this.dishService.getDish(params['name'])))
            .subscribe(dish => { 
                this.dish = dish;
            });
    }
    goBack(): void {
        this.location.back();
    }
  trackByFn(index: number, ingredient: any):string {      
      return ingredient.name;
  }
}