const RecipeListItem = ({recipe, selectRecipe}) => {

    const handleClick = () => {
        selectRecipe(recipe);
    }
    
    return(   
        <p onClick={handleClick}> {recipe.name}-{recipe.calories}</p>
    );
}

export default RecipeListItem;