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
    getIngredients(): Promise<Array<String>> {
        let allIngredients = [];
        this.dishes
            .filter(dish => dish.add)
            .forEach(dish => {
                allIngredients = allIngredients.concat(dish.ingredients);
            });
        return Promise.resolve(allIngredients);
    }
    createNewIngredients(ingredient: string): string[] {
        this._ingredients.push(ingredient);
        return this._ingredients;
       /* let dish = this.dishes.find(dish => name == dish.name);
        dish.ingredients.push(ingredient);
        return Promise.resolve(dish);*/
        /*return Promise.resolve(this.dishes.find(dish => {
            name == dish.name;
            dish.ingredients.push(ingredient);
        }));*/
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