// import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent"

import IngredientsContainer from "./IngredientsContainer";
import RecipeContainer from "./RecipeContainer";


const HomeContainer = () =>{

 
    
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     const fetchUsersData = async () => {
    //         const response = await fetch("http://localhost:8080/users");
    //         const data = await response.json();
    //         setUsers(data);
    //     }
    //     fetchUsersData()
    // }, [])

   

    // const [ingredients, setIngredients] = useState([])

    // useEffect (() => {
    //     const fetchIngredientsData = async () => {
    //         const response = await fetch("http://localhost:8080/ingredients");
    //         const data = await response.json();
    //         setIngredients(data);
    //     }
    //     fetchIngredientsData()
    // }, [])

        

    return(
        <>
        <div id="headerbar">
        <h3 id="header">ZWR- Food waste is bad taste!</h3>
        {/* <nav>
            <a><img src="/../logo.img"/></a>
        </nav> */}
        </div>




        <h2>Hi from home containers</h2>
        
        <BrowserRouter>
            <div className="App">
                <ul>
                    <li><Link to = '/' >Homepage</Link></li>
                    <li><Link to = '/recipes' >Recipes</Link></li>
                    <li><Link to = '/ingredients' >Ingredients</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<HomeComponent />}/>
                    <Route path='/recipes' element={<RecipeContainer/>}/>
                    <Route path='/ingredients' element={<IngredientsContainer/>}/>


                </Routes>
            </div>
        </BrowserRouter>
        {/* <HomeComponent></HomeComponent> */}
        </>
    )
    
}

export default HomeContainer;