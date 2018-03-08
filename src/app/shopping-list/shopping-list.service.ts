import { Ingredient } from "../shared/ingredient";

/*import { Injectable } from '@angular/core';

@Injectable()*/
export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  constructor() { }

  getIgredients() {
    return this.ingredients;
  }

  addIngredients(items: Ingredient[]) {
    //this.ingredients = [];
    Array.prototype.push.apply(this.ingredients, items);
    //this.ingredients.push(item);
  }

}
