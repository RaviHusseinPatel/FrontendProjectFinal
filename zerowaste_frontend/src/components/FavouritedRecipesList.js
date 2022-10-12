import RecipeListItem from "./RecipeListItem";

const FavouritedRecipesList = ({favouritedRecipes, selectRecipe}) => {

    const favouritedRecipeListItems = favouritedRecipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} selectRecipe={selectRecipe}/>
    })
    return(
        <ul>
            <h1 className="Favourited">favourited</h1>
            {favouritedRecipeListItems}
        </ul>
    );
}

export default FavouritedRecipesList;