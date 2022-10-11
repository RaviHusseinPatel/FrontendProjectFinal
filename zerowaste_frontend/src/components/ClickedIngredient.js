const ClickedIngredient = ({selectedIngredient}) => {

    return(
    <div id="clicked-recipe">
    <h2>{selectedIngredient.name}</h2>
    <ul>
        
        <p>Recipes:</p> {selectedIngredient.recipes.map(recipe =>
            <li>
                <strong>{recipe.name}</strong>
                <br></br>
                {recipe.method}
                
            </li>
            )}
    </ul>


</div>
)
}

export default ClickedIngredient;