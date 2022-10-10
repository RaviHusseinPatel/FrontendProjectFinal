const RecipeListItem = ({recipe, selectRecipe}) => {

    const handleClick = () => {
        selectRecipe(recipe);
    }
    
    return(
        <>
        <li onClick={handleClick}>{recipe.name}-{recipe.calories}
        </li>
        </>
    )
}

export default RecipeListItem;