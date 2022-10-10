const RecipeList = ({recipes}) => {

    // const recipeListItems = recipes.map((recipe) => {
    //     return (recipe={recipe})
    // })



    return( 

        <>
        <h2>hi from Recipe list</h2>
        {/* <ul>{recipeListItems}</ul> */}
        <ul>{recipes[3].name}</ul>
        
        </>

    )


}

export default RecipeList;