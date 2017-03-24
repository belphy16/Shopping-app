import {Component, OnInit} from '@angular/core';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component({
    moduleId: 'module.id',
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    dishes: Array<Dish>;

    constructor(private dishService: DishService) {}

    ngOnInit():void {
        this.dishes = this.dishService.getDishes();
    }
}