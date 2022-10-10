package com.example.ZeroWasteAPI.repositories;

import com.example.ZeroWasteAPI.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import static org.hibernate.loader.Loader.SELECT;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findRecipeByIngredientsName(String name);
    List<Recipe> findRecipeByUsersName(String name);

    List<Recipe> findRecipeByCaloriesLessThan(int calories);

}
