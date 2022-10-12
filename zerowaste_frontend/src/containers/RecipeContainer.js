import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import FavouritedRecipesList from "../components/FavouritedRecipesList";
import ClickedRecipe from "../components/ClickedRecipe";
import RecipeForm from "../components/RecipeForm";

const RecipeContainer = () =>{

    const [recipes, setRecipes] = useState([]);
    const [favouritedRecipes, setFavouritedRecipes]=useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    
    

    useEffect (() => {
        const fetchRecipesData = async () => {
            const response = await fetch("http://localhost:8080/recipes");
            const data = await response.json();
            setRecipes(data);
        }
        fetchRecipesData()
    }, [])

    const addFavouritedRecipe= (recipe) =>{
        if(favouritedRecipes.includes(recipe)){
            alert("You've already added this to favourites!");
        } else {
            setFavouritedRecipes([...favouritedRecipes, recipe]
            )
        }
    }

    const selectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    }

    const postRecipe = (newRecipe) => {
        fetch("http://localhost:8080/recipes", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRecipe)
        })
        .then(response => response.json())
        .then(savedRecipe => setRecipes([...recipes, savedRecipe]))
    }




    return(
        <div className="Recipe-container"> 
            <h1 className="Hi-from">Hi from recipe containers</h1>
            
            <RecipeList recipes={recipes} selectRecipe={selectRecipe}/>
            {selectedRecipe ?
                <ClickedRecipe
                    selectedRecipe= {selectedRecipe}
                    addFavouritedRecipe={addFavouritedRecipe}
                    />
                    :<div><h1 className="Select-recipe">Select a Recipe</h1></div>
        }
        <FavouritedRecipesList 
            favouritedRecipes={favouritedRecipes}
            selectRecipe= {selectRecipe}
            />
            
        <RecipeForm postRecipe={postRecipe} />

        </div>
    )




}

export default RecipeContainer