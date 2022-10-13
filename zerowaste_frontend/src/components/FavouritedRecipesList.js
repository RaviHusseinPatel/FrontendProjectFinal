import RecipeListItem from "./RecipeListItem";
import { BsFillStarFill } from "react-icons/bs";


const FavouritedRecipesList = ({favouritedRecipes, selectRecipe}) => {

    const favouritedRecipeListItems = favouritedRecipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} selectRecipe={selectRecipe}/>
    })
    return(
        <ul>
            <h3 className="Favourited">favourited
            <BsFillStarFill></BsFillStarFill></h3>
            {favouritedRecipeListItems}
        </ul>
    );
}

export default FavouritedRecipesList;