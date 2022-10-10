package com.example.ZeroWasteAPI.services;

import com.example.ZeroWasteAPI.models.Ingredient;
import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.models.User;
import com.example.ZeroWasteAPI.repositories.IngredientRepository;
import com.example.ZeroWasteAPI.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.auditing.ReactiveIsNewAwareAuditingHandler;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }


    public Recipe getRecipeById(long id) {
        return recipeRepository.findById(id).get();
    }

    public Recipe addNewRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
        return recipe;
    }

    public Recipe updateRecipe(Recipe recipe, Long id) {
        //Find recipe, add by id
        Recipe recipeToUpdate = recipeRepository.findById(id).get();
        //Take each property and update it
        recipeToUpdate.setName(recipe.getName());
        recipeToUpdate.setDescription(recipe.getDescription());
        recipeToUpdate.setCookingTime(recipe.getCookingTime());
        recipeToUpdate.setServings(recipe.getServings());
        recipeToUpdate.setMethod(recipe.getMethod());
        recipeToUpdate.setIngredients(recipe.getIngredients());
        //Save recipe to database
        recipeRepository.save(recipeToUpdate);
        //Return the recipe
        return recipeToUpdate;

    }

    public void deleteRecipe(Long id) {
    recipeRepository.deleteById(id);
    }

    public List<Recipe> getRecipeByIngredientName(String ingredientName) {
        return recipeRepository.findRecipeByIngredientsName(ingredientName);

    }

    public List<Recipe> getRecipeByUserName(String userName) {
        return recipeRepository.findRecipeByUsersName(userName);

    }

    public Recipe addIngredients(List<Ingredient> ingredients, Long id) {
        Recipe recipe = recipeRepository.findById(id).get();
        recipe.getIngredients().addAll(ingredients);
        recipeRepository.save(recipe);
        return recipe;

    }

    public Recipe addUsers(List<User> users, Long id) {
        Recipe recipe = recipeRepository.findById(id).get();
        recipe.getUsers().addAll(users);
        recipeRepository.save(recipe);
        return recipe;

    }

    public List <Recipe> getRecipesByCaloriesBelow(int calories){
        return recipeRepository.findRecipeByCaloriesLessThan(calories) ;
    }
}
