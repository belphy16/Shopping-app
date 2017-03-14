import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Dish} from './dish';


@Injectable()
export class DishService {
    //private dishesUrl = 'api/dishes';
    private headers = new Headers({'Content-Type': 'application/json'});
    private dishes = JSON.parse(localStorage.getItem('Dishes'));
    private _ingredients = [];
    constructor(private http: Http) {
    }
    getDishes(): Promise<Array<Dish>> {
        return Promise.resolve(this.dishes);
    }
    getDish(name: string): Promise<Dish> {
        return Promise.resolve(this.dishes.find(dish => name == dish.name));
    }
    create(name: string, ingredients: string[]): Promise<Dish> {
        const dish = new Dish({name: name, ingredients: [...ingredients], add: false});
        this.dishes.push(dish);
        localStorage.setItem('Dishes', JSON.stringify(this.dishes)); 
        return Promise.resolve(dish);
    }
    delete(name: string): Promise<Array<Dish>> {
        this.dishes = this.dishes.filter(item => item.name != name);
        localStorage.setItem('Dishes', JSON.stringify(this.dishes)); 
        return Promise.resolve(this.dishes);
    } 
    getIngredients(): string[] {
        let allIngredients = [];
        this.dishes
            .filter(dish => dish.add)
            .forEach(dish => {
                allIngredients = allIngredients.concat(dish.ingredients);
            });
        return allIngredients;
    }
    getIngredientsCounted():Promise<string[]> {
        var countedIngredients = {};
        this.getIngredients().forEach(x => {
            if(countedIngredients[x]) countedIngredients[x]++;
            else countedIngredients[x]=1;
        });
        
        return Promise.resolve(Object.keys(countedIngredients).map(key => `${countedIngredients[key]}x ${key}`));
    }
    createNewIngredients(ingredient: string): string[] {
        this._ingredients.push(ingredient);
        return this._ingredients;
    }
    selectAllDishes():void {
        this.dishes.forEach(dish => {dish.add = true;})
    }
    unselectAllDishes():void {
        this.dishes.forEach(dish => {dish.add = false;})
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