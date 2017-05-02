import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {Dish} from './dish';
import {DishService} from './dish.service';
import {DishesComponent} from './dishes.component';
import {MenuComponent} from './menu.component';

@Component({
    moduleId: 'module.id',
    selector: 'sliding-menu',
    templateUrl: './sliding-menu.component.html'
})

export class SlidingMenuComponent{
    menu_page = MenuComponent;
    main_page = DishesComponent;   
    
    
}