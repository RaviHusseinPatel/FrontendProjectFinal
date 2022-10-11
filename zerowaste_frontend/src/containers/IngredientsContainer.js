import { useState, useEffect } from "react";
import IngredientsList from "../components/IngredientsList";
import ClickedIngredient from "../components/ClickedIngredient";


const IngredientsContainer = () => {

    const [ingredients, setIngredients] = useState([])
    const [selectedIngredient, setSelectedIngredient] = useState(null)

      const fetchIngredientsData = async () => {
            const response = await fetch("http://localhost:8080/ingredients");
            const data = await response.json();
            setIngredients(data);
            console.log(data);
        }

    useEffect (() => {
        fetchIngredientsData()

    }, [])

    const selectIngredient = (Ingredient) => {
        setSelectedIngredient(Ingredient);
    }

    return(

        <>
        <IngredientsList ingredients = {ingredients} selectIngredient={selectIngredient}/>
            {selectedIngredient ?
                <ClickedIngredient
                    selectedIngredient= {selectedIngredient}
                    //addFavouritedRecipe={addFavouritedRecipe}
                    />
                    :<div><h1>Select a Ingredient</h1></div>
        }
        </>


    )


}

export default IngredientsContainer;