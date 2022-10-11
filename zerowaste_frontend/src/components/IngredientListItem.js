const IngredientsListItem = ({ingredient, selectIngredient}) => {

    const handleClick = () => {
        selectIngredient(ingredient)
            
    }

    return (
        <>
        <li onClick={handleClick}> {ingredient.name}</li>
        </>
        
    )
}

export default IngredientsListItem;