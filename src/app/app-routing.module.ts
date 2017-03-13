import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DishesComponent} from './dishes.component';
import {ListComponent} from './list.component';
import {DashboardComponent} from './dashboard.component';
import {DishDetailComponent} from './dish-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard',  component: DashboardComponent},
    {path: 'dishes',  component: DishesComponent},
    {path: 'items', component: ListComponent},
    {path: 'detail/:name', component: DishDetailComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}