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
        <h2>hi from Recipe list</h2>

        <ul>

            {RecipeListItemFunction}

        </ul>

        {/* <p>{recipes[0].name}</p> */}        
        </>

    )

    }

export default RecipeList;