import { Routes } from "@angular/router";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";


export var RECIPE_ROUTES = [
    
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },     

];