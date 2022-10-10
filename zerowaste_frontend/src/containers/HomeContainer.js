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
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li><Link to = '/' >Homepage</Link></li>
                    <li><Link to = '/recipes' >Recipes</Link></li>
                    <li><Link to = '/ingredients' >Ingredients</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<HomeComponent />}/>
                    <Route path='/recipes' element={<recipes />}/>
                    <Route path='/ingredients' element={<ingredients />}/>


                </Routes>
            </div>
        </BrowserRouter>
        <HomeComponent></HomeComponent>
        </>
    )
}

export default HomeContainer;