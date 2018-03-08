import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Recipe_1", "My Recipe number 1 description", "https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg",
      [new Ingredient("ingr_11", 97), new Ingredient("ingr_12", 17), new Ingredient("ingr_13", 73), new Ingredient("ingr_14", 101)]),
    new Recipe("Recipe_2", "My Recipe number 2 description", "https://cancouncil.org/wp-content/uploads/2014/10/item1-2-big.jpg",
      [new Ingredient("ingr_21", 3), new Ingredient("ingr_22", 29), new Ingredient("ingr_23", 31), new Ingredient("ingr_24", 2)]),
    new Recipe("Recipe_3", "My Recipe number 3 description", "https://vignette.wikia.nocookie.net/megaman/images/8/8c/MM2Item1.jpg/revision/latest?cb=20110404074845",
      [new Ingredient("ingr_31", 5), new Ingredient("ingr_32", 61), new Ingredient("ingr_33", 11) ]),
    new Recipe("Recipe_4", "My Recipe number 4 description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAH0j7vm21OWAJSPc7xZRoue2Bvhnba6cxqYHw8W9eaPhOrT6c", []),

  ];
  constructor(){}

  getRecipes(){
    return this.recipes;
  }

  deleteRecipe(selectRecipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(selectRecipe),1);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

}
