import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  //with this U need to add RecipeService to providers in app.module.ts 
  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  //@Output() recipeSelected = new EventEmitter<Recipe>();

  //Emitting the selected Recipe to RecipeDetail  
  /*onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }*/


}
