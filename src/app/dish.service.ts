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
    private selectFunction = "Select all";

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
    deleteIngredient(name: string, ingredient: string): Promise<Array<Dish>> {
        let _dish = this.dishes.find(item => item.name == name);
        _dish.ingredients = _dish.ingredients.filter(item => item != ingredient)
        let index = this.dishes.findIndex(dish => name == dish.name);
        if (index != -1) {
            this.dishes[index] = _dish;
            localStorage.setItem('Dishes', JSON.stringify(this.dishes));            
        } 
        return Promise.resolve(this.dishes);
    }
    updateDish(name: string, newDish: Dish): Promise<Dish> {
        let index = this.dishes.findIndex(dish => name == dish.name);
        if (index != -1) {
            this.dishes[index] = newDish;
            localStorage.setItem('Dishes', JSON.stringify(this.dishes));
        } 
        return Promise.resolve(newDish);
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
        
        return Promise.resolve(Object.keys(countedIngredients)
        .sort(function(a,b){
            let word1 = a.toLowerCase(), word2 = b.toLowerCase();
            return word1 > word2 ? 1 : word1 < word2 ? -1 : 0;
        })
        .map(key => `${countedIngredients[key]}x ${key}`));
    }
    createNewIngredients(ingredient: string): string[] {
        this._ingredients.push(ingredient);
        return this._ingredients;
    }
    toggleSelect():void {
        if (this.dishes.some( x => !x.add )) {
            //select all
            this.selectFunction = "Unselect all";
            this.dishes.forEach(dish => {dish.add = true;})
        } else {
            //unselect all
            this.selectFunction = "Select all";
            this.dishes.forEach(dish => {dish.add = false;})
        }
    }
    toggleSelectCheck():void {
        if (this.dishes.some( x => x.add )) {
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