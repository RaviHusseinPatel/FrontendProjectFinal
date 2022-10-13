const IngredientsListItem = ({ingredient, selectIngredient}) => {

    const handleClick = () => {
        selectIngredient(ingredient)
            
    }

    return (
        <>
        <li onMouseOver={({target})=>target.style.color="white"}
            onMouseOut={({target})=>target.style.color="black"}
                       onClick={handleClick}> {ingredient.name}
        </li>
        </>
        
    )
}

export default IngredientsListItem;