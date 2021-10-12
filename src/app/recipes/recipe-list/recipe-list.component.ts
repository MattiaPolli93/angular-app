import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is a descriptive test", "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"),
        new Recipe("Another Test Recipe", "This is a descriptive test", "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg")
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
