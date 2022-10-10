import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomeComponent from "../components/HomeComponent"


const HomeContainer = () =>{
 
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsersData = async () => {
            const response = await fetch("http://localhost:8080/users");
            const data = await response.json();
            setUsers(data);
        }
        fetchUsersData()
    }, [])

    const [recipes, setRecipes] = useState([])
    useEffect (() => {
        const fetchRecipesData = async () => {
            const response = await fetch("http://localhost:8080/recipes");
            const data = await response.json();
            setRecipes(data);
        }
        fetchRecipesData()
    }, [])

    const [ingredients, setIngredients] = useState([])

    useEffect (() => {
        const fetchIngredientsData = async () => {
            const response = await fetch("http://localhost:8080/ingredients");
            const data = await response.json();
            setIngredients(data);
        }
        fetchIngredientsData()
    }, [])



    return(
        <>
        <h1>Hi from home containers</h1>

        <HomeComponent></HomeComponent>
        </>
    )
}

export default HomeContainer;