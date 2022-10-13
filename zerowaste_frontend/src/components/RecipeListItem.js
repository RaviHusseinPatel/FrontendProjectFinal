const RecipeListItem = ({recipe, selectRecipe}) => {

    const handleClick = () => {
        selectRecipe(recipe);
    }
    
    return(   
        <p onMouseOver={({target})=>target.style.color="white"}
        onMouseOut={({target})=>target.style.color="black"}
        onClick={handleClick}> {recipe.name}-{recipe.calories}</p>
    );
}

export default RecipeListItem;