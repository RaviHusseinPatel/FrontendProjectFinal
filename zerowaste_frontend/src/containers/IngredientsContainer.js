import { useState, useEffect } from "react";
import IngredientsList from "../components/IngredientsList";


const IngredientsContainer = () => {

    const [ingredients, setIngredients] = useState([])

      const fetchIngredientsData = async () => {
            const response = await fetch("http://localhost:8080/ingredients");
            const data = await response.json();
            setIngredients(data);
            console.log(data);
        }

    useEffect (() => {
        fetchIngredientsData()

    }, [])

    return(

        <>
        <IngredientsList ingredients = {ingredients}/>
        </>


    )


}

export default IngredientsContainer;