package com.example.ZeroWasteAPI.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Type;
import org.hibernate.type.TextType;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//TO DO: Add dependency to fix errors, change List to ArrayList

@Entity
@Table(name = "recipes")

public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private double cookingTime;

    @Column
    private int servings;

    @Column
    private int calories;

    @Column
    private String method;

    @ManyToMany
    @JoinTable(
            name = "ingredients_by_recipes",
            joinColumns = {@JoinColumn(name = "recipe_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "ingredient_id", nullable = false)}
    )
    @JsonIgnoreProperties({"recipes"})
    private List<Ingredient> ingredients;

    @ManyToMany
    @JoinTable(
            name = "recipes_by_users",
            joinColumns = {@JoinColumn(name = "recipe_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false)}
    )
    @JsonIgnoreProperties({"recipes"})
    private List<User> users;

    // constructor

    public Recipe(String name, String description, double cookingTime, int servings, int calories, String method) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cookingTime = cookingTime;
        this.servings = servings;
        this.calories = calories;
        this.method = method;
        this.ingredients = new ArrayList<>();
        this.users = new ArrayList<>();
    }

    //empty constructor

    public Recipe() {

    }

    //getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(double cookingTime) {
        this.cookingTime = cookingTime;
    }

    public int getServings() {
        return servings;
    }

    public void setServings(int servings) {
        this.servings = servings;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredient) {
        this.ingredients = ingredients;

    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

}