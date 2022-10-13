import IngredientsListItem from "./IngredientListItem"
const IngredientsList = ({ingredients, selectIngredient}) => {

   
    const IngredientsListItemFunction= ingredients.map((ingredient) => {
        return ( 
        <li>
           <IngredientsListItem ingredient = {ingredient} selectIngredient={selectIngredient} />
           
           </li>
        )
    
    }
    )

    return ( 
            <>
            <h2>These are the ingredients in your fridge, click to find out what recipes you can make using them:</h2>
            <ul>
            {IngredientsListItemFunction}
            {/* {JSON.stringify(ingredients)} */}
            </ul>
             </>
             )

    }
         
        


export default IngredientsList;