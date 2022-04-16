import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Schnitzel", "Tasty Schnitzel", "https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG", [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 20)
        ]),
        new Recipe("Another Burger", "Another tasty burger", "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg", [
            new Ingredient("Buns", 2),
            new Ingredient("Meat", 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}