import {Ingredient} from './ingredient';
import * as _ from 'lodash';

export class Dish{
  name: string;
  ingredients: Array<Ingredient>;
  add: boolean;

  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    this.add = false;
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