const ClickedRecipe = ({selectedRecipe, addFavouritedRecipe}) => {
    const handleClick = () => {
        addFavouritedRecipe(selectedRecipe)
    }

    return(
        <div id="clicked-recipe">
            <h2>{selectedRecipe.name}</h2>
            <ul>
                <li>Recipe Description : {selectedRecipe.description}</li>
                <li>Total calories: {selectedRecipe.calories}</li>
                <li>Total cooking time: {selectedRecipe.cookingTime}</li>
                <p>Ingredients:</p> {selectedRecipe.ingredients.map(ingredient =>
                    <li>
                        {ingredient.name}
                    </li>
                    )}
                <li>Method: {selectedRecipe.method}</li>
                <li> Servings: {selectedRecipe.servings}</li>
            </ul>

            <button onClick={handleClick}>Add to Favourites</button>

        </div>
    )
    }
export default ClickedRecipe;