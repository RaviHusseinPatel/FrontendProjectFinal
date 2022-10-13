import RecipeListItem from "./RecipeListItem";

const RecipeList = ({recipes, selectRecipe}) => {

    // const recipeListItems = recipes.map((recipe) => {
    //     return (recipe={recipe})
    // })

    const RecipeListItemFunction= recipes.map((recipe) => {
        return ( 
        <li>
           <RecipeListItem recipe = {recipe} selectRecipe={selectRecipe}/>
        </li>
        ) 
        }
    )
	
    return( 

        <>
        <h2>Click to view your chosen recipe's description, cooking method and more!</h2>

        <ul>

            {RecipeListItemFunction}

        </ul>

              
        </>

    )

    }

export default RecipeList;