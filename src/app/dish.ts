export class Dish{
  name: string;
  ingredients: [string];
  add: boolean;

  constructor(obj) {
    this.name = obj.name;
    this.ingredients = obj.ingredients;
    this.add = obj.add;
  }
}