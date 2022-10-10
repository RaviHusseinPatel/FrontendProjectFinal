import RecipeListItem from "./RecipeListItem";

const FavouritedRecipesList = ({favouritedRecipes, selectRecipe}) => {

    const favouritedRecipeListItems = favouritedRecipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} selectRecipe={selectRecipe}/>
    })
    return(
        <ul>
            <h1>favourited</h1>
            {favouritedRecipeListItems}
        </ul>
    );
}

export default FavouritedRecipesList;