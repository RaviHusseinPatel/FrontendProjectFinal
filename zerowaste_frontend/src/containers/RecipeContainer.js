import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import FavouritedRecipesList from "../components/FavouritedRecipesList";
import ClickedRecipe from "../components/ClickedRecipe";

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
            alert("You've already favourited this country!");
        } else {
            setFavouritedRecipes([...favouritedRecipes, recipe]
            )
        }
    }

    const selectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    }


    return(
        <>
            <h1>Hi from recipe containers</h1>
             {/* <BrowserRouter> */}
            <div id="recipe-container">

            <RecipeList recipes={recipes} selectRecipe={selectRecipe}/>
            {selectedRecipe ?
                <ClickedRecipe
                    selectedRecipe= {selectedRecipe}
                    addFavouritedRecipe={addFavouritedRecipe}
                    />
                    :<div><h1>Select a Recipe</h1></div>
        }
        <FavouritedRecipesList 
            favouritedRecipes={favouritedRecipes}
            selectRecipe= {selectRecipe}
            />
            </div>

                {/* <ul>
                    <li><Link to = '/' >Homepage</Link></li>
                    <li><Link to = '/recipes' >Recipes</Link></li>
                    <li><Link to = '/ingredients' >Ingredients</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<HomeComponent />}/>
                    <Route path='/recipes' element={<RecipeList recipes={recipes} selectRecipe={selectRecipe}/>}/>
                    <Route path='/ingredients' element={<IngredientsList />}/>


                </Routes>
            
        </BrowserRouter> */}
        {/* <HomeComponent></HomeComponent> */}
        </>
    )




}

export default RecipeContainer