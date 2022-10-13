import { useState, useEffect } from "react";
import IngredientsList from "../components/IngredientsList";
import ClickedIngredient from "../components/ClickedIngredient";
import IngredientForm from "../components/IngredientForm";


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

    const postIngredient = (newIngredient) => {
        fetch("http://localhost:8080/ingredients", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newIngredient)
        })
        .then(response => response.json())
        .then(savedIngredient => setIngredients([...ingredients, savedIngredient]))
    }

    return(

        <>
        <IngredientsList ingredients = {ingredients} selectIngredient={selectIngredient}/>
            {selectedIngredient ?
                <ClickedIngredient
                    selectedIngredient= {selectedIngredient}
                    />
                    :<div><h3></h3></div>
        }
        <IngredientForm postIngredient={postIngredient}/>
        </>


    )


}

export default IngredientsContainer;