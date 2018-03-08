import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {

  //objet de type Recipe(class)
  @Input() recipe: Recipe;
  @Input() recipeId: number = 2;

  /*
    recipeSelected = new EventEmitter<Recipe>();
    onRecipeSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
    }*/

}
