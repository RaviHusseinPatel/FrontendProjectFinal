package com.example.ZeroWasteAPI.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue
    private long id;
    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name = "recipes_by_users",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "recipe_id", nullable = false)}
    )
    @JsonIgnoreProperties({"users"})
    private List<Recipe> recipes;
    //private ArrayList<Recipe> recipes;

    public User(String name) {
        this.name = name;
        this.recipes = new ArrayList<>();
    }
    public User(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }
}
