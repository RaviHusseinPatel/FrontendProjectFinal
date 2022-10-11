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
            <h2>hi from ingredients list</h2>
            <ul>
            {IngredientsListItemFunction}
            {/* {JSON.stringify(ingredients)} */}
            </ul>
             </>
             )

    }
         
        


export default IngredientsList;