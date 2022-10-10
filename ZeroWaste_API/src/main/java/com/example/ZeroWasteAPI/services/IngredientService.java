package com.example.ZeroWasteAPI.services;

import com.example.ZeroWasteAPI.models.Ingredient;
import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.models.User;
import com.example.ZeroWasteAPI.repositories.IngredientRepository;
import com.example.ZeroWasteAPI.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    RecipeRepository recipeRepository;

    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient getIngredientById(long id){
        return ingredientRepository.findById(id).get();
    }

    public Ingredient addNewIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
        return ingredient;
    }

    public void addRecipe(Recipe recipe){
        this.addRecipe(recipe);
    }

    public Ingredient updateIngredient(Ingredient ingredient, Long id) {
        //Find recipe, add by id
        Ingredient ingredientToUpdate = ingredientRepository.findById(id).get();
        //Take each property and update it
        ingredientToUpdate.setName(ingredient.getName());
        //Save recipe to database
        ingredientRepository.save(ingredientToUpdate);
        //Return the recipe
        return ingredientToUpdate;
    }

    //DELETE recipe
    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }

    public List<Ingredient> getIngredientByRecipeName(String recipeName) {
        return ingredientRepository.findIngredientByRecipesName(recipeName);

    }

    public Ingredient addRecipes(List<Recipe> recipes, Long id) {
        Ingredient ingredient = ingredientRepository.findById(id).get();
        ingredient.getRecipes().addAll(recipes);
        ingredientRepository.save(ingredient);
        return ingredient;

    }
}

