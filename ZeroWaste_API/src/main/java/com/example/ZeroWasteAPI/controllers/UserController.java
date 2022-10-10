package com.example.ZeroWasteAPI.controllers;

import com.example.ZeroWasteAPI.models.Ingredient;
import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.models.User;
import com.example.ZeroWasteAPI.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")

public class UserController {

    @Autowired
    UserService userService;

    //GET User By Recipe Name
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(@RequestParam Optional<String> recipeName) {
        List<User> users;
        if (recipeName.isPresent()) {
            users = userService.getUserByRecipeName(recipeName.get());
        } else {
            users = userService.getAllUsers();
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    //GET User By Id
    @GetMapping(value = "/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //CREATE - Add new user
    @PostMapping
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        User savedUser = userService.addNewUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //UPDATE User
    @PatchMapping (value = "/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable Long id) {
        User updatedUser = userService.updateUser(user, id);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    //UPDATE - Adds Recipe to User
    @PatchMapping (value = "/{id}/recipes")
    public ResponseEntity<User> updateUser(@RequestBody List<Recipe> recipes, @PathVariable Long id) {
        User updatedUser = userService.addRecipes(recipes, id);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    //DELETE User
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteUser(@PathVariable long id){
        userService.deleteUser(id);
        return new ResponseEntity("User removed successfully", HttpStatus.OK);
    }

}
