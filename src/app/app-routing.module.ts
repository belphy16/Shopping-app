import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DishesComponent} from './dishes.component';
import {ListComponent} from './list.component';
import {DishDetailComponent} from './dish-detail.component';
import {AddNewItemComponent} from './add-new-item.component';
import {MenuComponent} from './menu.component';

const routes: Routes = [
    /*{path: '', redirectTo: '/dishes', pathMatch: 'full'},*/
    {path: 'dishes',  component: DishesComponent},
    {path: 'items', component: ListComponent},
    {path: 'detail/:name', component: DishDetailComponent},
    {path: 'addnewitem', component: AddNewItemComponent},
    {path: 'menu', component: MenuComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}