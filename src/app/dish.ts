import {Ingredient} from './ingredient';
import * as _ from 'lodash';

export class Dish{
  name: string;
  ingredients: Array<Ingredient>;
  add: boolean;

  constructor(obj) {
    this.name = obj.name;
    this.ingredients = obj.ingredients;
    this.add = obj.add;
  }
  deleteIngredient(name: string) {
    let index = _.findIndex(this.ingredients, x => x.name == name);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }
  addIngredient(name: string) {
    let index = _.findIndex(this.ingredients, x => x.name == name);
    if (index == -1) {
      this.ingredients.push(new Ingredient(name));
    }
  }
}