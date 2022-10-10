package com.example.ZeroWasteAPI.controllers;

import com.example.ZeroWasteAPI.models.Ingredient;
import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.services.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ingredients")
public class IngredientController {

    @Autowired
    IngredientService ingredientService;

    //GET Ingredient By Recipe
    @GetMapping
    public ResponseEntity<List<Ingredient>> getAllIngredients(
            @RequestParam Optional<String> recipeName
    ){
        List<Ingredient> ingredients;
        if (recipeName.isPresent()){
            ingredients = ingredientService.getIngredientByRecipeName(recipeName.get());
        } else {
            ingredients = ingredientService.getAllIngredients();
        }
        return new ResponseEntity<>(ingredients, HttpStatus.OK);
    }

    //GET ingredient By Id
    @GetMapping(value = "/{id}")
    public ResponseEntity<Ingredient> getIngredientById(@PathVariable long id){
        Ingredient ingredient = ingredientService.getIngredientById(id);
        return new ResponseEntity<>(ingredient, HttpStatus.OK);
    }

    // CREATE - Add new Ingredient
    @PostMapping
    public ResponseEntity<Ingredient> addNewIngredient(@RequestBody Ingredient ingredient) {
        Ingredient savedIngredient = ingredientService.addNewIngredient(ingredient);
        return new ResponseEntity<>(savedIngredient, HttpStatus.CREATED);
    }

    //UPDATE - Update Ingredient
    @PatchMapping (value = "/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@RequestBody Ingredient ingredient, @PathVariable Long id) {
        Ingredient updatedIngredient = ingredientService.updateIngredient(ingredient, id);
        return new ResponseEntity<>(updatedIngredient, HttpStatus.OK);
    }

    //UPDATE - Update Recipe
    @PatchMapping (value = "/{id}/recipes")
    public ResponseEntity<Ingredient> updateIngredient(@RequestBody List<Recipe> recipes, @PathVariable Long id) {
        Ingredient updatedIngredient = ingredientService.addRecipes(recipes, id);
        return new ResponseEntity<>(updatedIngredient, HttpStatus.OK);
    }

    //DELETE - Delete Ingredient
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteIngredient(@PathVariable long id){
        ingredientService.deleteIngredient(id);
        return new ResponseEntity(null, HttpStatus.NO_CONTENT);
    }
}
