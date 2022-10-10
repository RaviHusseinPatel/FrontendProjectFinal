
package com.example.ZeroWasteAPI.repositories;

        import static org.junit.jupiter.api.Assertions.*;

        import com.example.ZeroWasteAPI.models.Ingredient;
        import com.example.ZeroWasteAPI.models.Recipe;
        import org.junit.jupiter.api.Test;
        import org.junit.jupiter.api.extension.ExtendWith;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.test.context.junit4.SpringRunner;

        import java.util.List;

    @SpringBootTest
    class RecipeRepositoryTest {

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    IngredientRepository ingredientRepository;

    @Test
    void checkToFindRecipeByIngredientsName() {
        //given
        Ingredient peas = new Ingredient("peas");
        ingredientRepository.save(peas);
        Recipe chickenFriedRice = new Recipe("chickenFried", "chicken fried rice and stuff", 35, 2, 240, "just cook chicken");
        chickenFriedRice.getIngredients().add(peas);
        recipeRepository.save(chickenFriedRice);


        Recipe bakedPotato = new Recipe("bakedPotato", "bakedPotato and stuff", 40, 1, 230, "just cook potato");
        bakedPotato.getIngredients().add(peas);
        recipeRepository.save(bakedPotato);

        // when
        List<Recipe> foundRecipes = recipeRepository.findRecipeByIngredientsName("peas");
        //then
        assertEquals(2, foundRecipes.size());






    }}









