import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Dish} from './dish';
import {Ingredient} from './ingredient';
import * as _ from 'lodash';


@Injectable()
export class DishService {
    //private dishesUrl = 'api/dishes';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dishes = this.load();
    private _ingredients = [];
    private selectFunction = "Select all";

    constructor(private http: Http) {
    }
    capitalize(name:string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    getDishes(): Array<Dish> {
        return this.dishes;
    }
    getDish(name: string): Dish {
        return _.find(this.dishes, (x:Dish) => x.name == name);
    }
    load() {
        const dishes = JSON.parse(localStorage.getItem('Dishes')) || [];
        this.dishes = dishes.map(dish => new Dish(dish.name, dish.ingredients.map(ingredient => new Ingredient(ingredient.name))));
        return this.dishes;
    }
    save() {
        localStorage.setItem('Dishes', JSON.stringify(this.dishes));
    }
    add(name: string): Array<Dish> {
        if (!_.findKey(this.dishes, (x:Dish) => x.name === name)) {
            name = this.capitalize(name);
            const dish = new Dish(name, []);
            this.dishes.push(dish);
            this.save();
        }
        return this.dishes;
    }
    delete(name: string): Array<Dish> {
        let index = _.findIndex(this.dishes, (x:Dish) => x.name == name);
        if (index > -1) {
            this.dishes.splice(index, 1);
            this.save();
        }
        return this.dishes;
    }
    addIngredient(dishName: string, ingredient: string): Array<Dish> {
        ingredient = this.capitalize(ingredient); 
        dishName = this.capitalize(dishName); 
        let index = _.findIndex(this.dishes, (x:Dish) => x.name == dishName);
        if (index > -1) {
            const res = this.dishes[index];            
            res.addIngredient(ingredient);
            this.save();
        } else {
            const dish = new Dish(dishName, []);
            dish.addIngredient(ingredient);
            this.dishes.push(dish);
            this.save();
        }
        return this.dishes;
    }
    deleteIngredient(dishName: string, ingredient: string): Array<Dish> {
        let index = _.findIndex(this.dishes, (x:Dish) => x.name == dishName);
        if (index > -1) {
            _.find(this.dishes, (x:Dish) => x.name == dishName).deleteIngredient(ingredient);
            this.save();
        }
        return this.dishes;
    }
    getSelectedIngredients(): Array<Ingredient> {
        let allIngredients = [];
        _.clone(this.dishes)
            .filter(dish => dish.add)
            .forEach(dish => {
                allIngredients = allIngredients.concat(dish.ingredients);
            });
        return allIngredients;
    }
    getIngredientsCounted(): Array<string> {
        var countedIngredients = {};
        console.log(this.getSelectedIngredients());
        this.getSelectedIngredients().forEach(x => {
            if (countedIngredients[x.name]) countedIngredients[x.name]++;
            else countedIngredients[x.name] = 1;
        });
        const res = Object.keys(countedIngredients)
            .sort(function (a, b) {
                let word1 = a.toUpperCase(), word2 = b.toUpperCase();
                return word1 > word2 ? 1 : word1 < word2 ? -1 : 0;
            })
            .map(key => `${countedIngredients[key]}x ${key}`);
        return res;
    }
    toggleSelect(): void {
        let dishes = [...this.dishes];
        if (dishes.some(x => !x.add)) {
            //select all
            this.selectFunction = "Unselect all";
            dishes.forEach(dish => { dish.add = true; })

        } else {
            //unselect all
            this.selectFunction = "Select all";
            dishes.forEach(dish => { dish.add = false; })
        }
    }
    toggleSelectCheck(): void {
        let dishes = [...this.dishes];
        if (dishes.some(x => x.add)) {
            //select all
            this.selectFunction = "Unselect all";
        } else {
            //unselect all
            this.selectFunction = "Select all";
        }
    }
    /*getDishes(): Promise<Dish[]> {
        return this.http.get(this.dishesUrl)
        .toPromise()
        .then(response => response.json().data as Dish[])
        .catch(this.handleError);
    }
    getDish(id: number): Promise<Dish> {
        const url = `${this.dishesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Dish)
            .catch(this.handleError);
    }
    update(dish: Dish): Promise<Dish> {
        const url = `${this.dishesUrl}/${dish.id}`;
        return this.http
        .put(url, JSON.stringify(dish), {headers: this.headers})
        .toPromise()
        .then(() => dish)
        .catch(this.handleError);
    }
    create(name: string): Promise<Dish> {
        return this.http
        .post(this.dishesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.dishesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    getIngredientsFromDish(id: number): Promise<Dish> {
        const url = `${this.dishesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data.ingredients)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }*/

}