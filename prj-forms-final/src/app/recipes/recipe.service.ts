import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DataStorageService } from '../shared/data-service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] ;
      
  constructor(private slService: ShoppingListService) {
    

    
  }
  setData(recipe:Recipe[]){
    
this.recipes=recipe;
console.log(this.recipes[0].ingridients);
this.recipesChanged.next(this.recipes.slice());
//console.log(this.recipes);console.log(this.recipes);
  }

  getRecipes() {
    if(this.recipes!=null){
      console.log(this.recipes);
    return this.recipes.slice();
  
  }
    else return null;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    if(this.recipes!=null){
      console.log(this.recipes);
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
  
  }
    
  
    
   
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
