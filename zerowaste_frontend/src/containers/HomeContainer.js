// import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent"

import IngredientsContainer from "./IngredientsContainer";
import RecipeContainer from "./RecipeContainer";
import { FaPepperHot } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { ImSpoonKnife } from "react-icons/im";
import { ImLeaf } from "react-icons/im";

import { BiFoodMenu } from "react-icons/bi";






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
    

    <h1 id="title">ZeroWasteRecipes</h1>
        <h2>Welcome to ZeroWasteRecipes, choose below to view available recipes and ingredients! <br></br> Don't forget to add your own ;)</h2>
        
        <BrowserRouter id="browser">
            <div id="App">
                <ul id="navbar">
                    <li className="homeLogo"><Link to = '/' >
                    <FaHome size={90}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}
                       />
                    
                    </Link></li>


                    <li><Link to = '/recipes' className="recipesLogo">
                        {/* Recipes */}
                        <BiFoodMenu size={90}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}/>
                        {/* Recipes */}


                    </Link></li>
                    <li><Link to = '/ingredients' className="ingredientsLogo">
                        {/* Ingredients */}
                        <FaPepperHot size={90}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}/>                 
                        
                        </Link></li>
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