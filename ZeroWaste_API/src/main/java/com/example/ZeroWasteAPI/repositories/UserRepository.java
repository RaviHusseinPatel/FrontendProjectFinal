package com.example.ZeroWasteAPI.repositories;

import com.example.ZeroWasteAPI.models.Recipe;
import com.example.ZeroWasteAPI.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findUserByRecipesName(String name);
}
