import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RECIPE_ROUTES } from './recipes/recipes.routing';

/*
const RECIPE_ROUTES = [
    
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },     

];*/

const APP_ROUTES_PROVIDER: Routes = [

    { path: '', redirectTo: '/recipes', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDER);