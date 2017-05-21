import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';

@Component({
    moduleId: 'module.id',
    selector: 'menu',
    templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{
     constructor(
        private dishService: DishService,
        private location: Location
        ) {}

    ngOnInit():void {
       
    }
    goBack(): void {
        this.location.back();
    }
}