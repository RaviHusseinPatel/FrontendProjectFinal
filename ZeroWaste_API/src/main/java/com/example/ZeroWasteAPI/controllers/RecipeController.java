package com.example.ZeroWasteAPI.controllers;

import com.example.ZeroWasteAPI.models.Ingredient;
import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.models.User;
import com.example.ZeroWasteAPI.services.IngredientService;
import com.example.ZeroWasteAPI.services.RecipeService;
import com.example.ZeroWasteAPI.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    RecipeService recipeService;

    //READ - GET Recipe by Ingredient Name
    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes(
            @RequestParam Optional<String> ingredientName, @RequestParam Optional<String> userName
    ) {
        List<Recipe> recipes;
        if (ingredientName.isPresent()) {
            recipes =  recipeService.getRecipeByIngredientName(ingredientName.get());
        } else if (userName.isPresent()) {
            recipes = recipeService.getRecipeByUserName(userName.get());
        } else {
            recipes = recipeService.getAllRecipes();
        }
        return new ResponseEntity<>(recipes, HttpStatus.OK);
    }

    //GET Recipe by Calories
    @GetMapping(value = "/calories/{calories}")
    public ResponseEntity <List<Recipe>> getRecipeByCalories(@PathVariable int calories) {
        List<Recipe> recipesByCalories  = recipeService.getRecipesByCaloriesBelow(calories);
        return new ResponseEntity<>(recipesByCalories, HttpStatus.OK);
    }

    //Get recipe by ID
    @GetMapping(value = "/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable long id) {
        Recipe recipe = recipeService.getRecipeById(id);
        return new ResponseEntity<>(recipe, HttpStatus.OK);
    }

    //UPDATE Recipe
    @PatchMapping (value = "/{id}")
    public ResponseEntity<Recipe> updateRecipe(@RequestBody Recipe recipe, @PathVariable Long id) {
        Recipe updatedRecipe = recipeService.updateRecipe(recipe, id);
        return new ResponseEntity<>(updatedRecipe, HttpStatus.OK);
    }

    // CREATE - Adding New Recipe
    @PostMapping
    public ResponseEntity<Recipe> addNewRecipe(@RequestBody Recipe recipe) {
        Recipe savedRecipe = recipeService.addNewRecipe(recipe);
        return new ResponseEntity<>(savedRecipe, HttpStatus.CREATED);
    }

    //UPDATE - Changing Recipe's ingredients
    @PatchMapping (value = "/{id}/ingredients")
    public ResponseEntity<Recipe> updateRecipesIngredient(@RequestBody List<Ingredient> ingredients, @PathVariable Long id) {
        Recipe updatedRecipe = recipeService.addIngredients(ingredients, id);
        return new ResponseEntity<>(updatedRecipe, HttpStatus.OK);
    }

    //Update Recipe User
    @PatchMapping (value = "/{id}/users")
    public ResponseEntity<Recipe> updateRecipesUser(@RequestBody List<User> users, @PathVariable Long id) {
        Recipe updatedRecipe = recipeService.addUsers(users, id);
        return new ResponseEntity<>(updatedRecipe, HttpStatus.OK);
    }

    // DELETE
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteRecipe(@PathVariable long id) {
        recipeService.deleteRecipe(id);
        return new ResponseEntity("Recipe removed successfully", HttpStatus.OK);
    }

}

