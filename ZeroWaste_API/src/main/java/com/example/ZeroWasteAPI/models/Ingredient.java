package com.example.ZeroWasteAPI.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name = "ingredients_by_recipes",
            joinColumns = {@JoinColumn(name = "ingredient_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "recipe_id", nullable = false)}
    )
    @JsonIgnoreProperties({"ingredients"})
    private List<Recipe> recipes;

    public Ingredient(String name) {
            this.id = id;
            this.name = name;
            this.recipes = new ArrayList<>();
    }

    public Ingredient() {

    }

        public String getName () {
            return name;
        }

        public void setName (String name){
            this.name = name;
        }

        public long getId () {
            return id;
        }

        public void setId ( long id){
            this.id = id;
        }

        public List<Recipe> getRecipes () {
            return recipes;
        }

        public void setRecipes (List<Recipe> recipes) {
            this.recipes = recipes;
        }

}
