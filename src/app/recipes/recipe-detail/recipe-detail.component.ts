import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  //@Input() selectedRecipe: Recipe;
  private selectedRecipe: Recipe;
  private recipeIndex:number;
  private subscription: Subscription

  //get ShoppingListService
  constructor(
    private sls: ShoppingListService, 
    private router: Router, 
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  onAddToShopptingList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  //extract the recipeIndex
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
     );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
