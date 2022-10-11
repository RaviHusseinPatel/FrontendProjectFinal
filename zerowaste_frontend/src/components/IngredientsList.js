import IngredientsListItem from "./IngredientListItem"
const IngredientsList = ({ingredients}) => {

   
    const IngredientsListItemFunction= ingredients.map((ingredient) => {
        return ( 
        <li>
           <IngredientsListItem ingredient = {ingredient} />
           
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