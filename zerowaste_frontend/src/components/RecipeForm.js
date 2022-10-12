import {useState} from 'react';

const RecipeForm = ({postRecipe}) => {

    

    const [stateRecipe, setStateRecipe] = useState(
        {


		name: "",
		description: "",
		cookingTime: "",
		servings: "",
        calories: "",
		method: "",
	    

        }
    )

    const handleChange = (event) => {
        console.log(event)
        let propertyName = event.target.name; 
        let copiedRecipe = {...stateRecipe}
        copiedRecipe[propertyName] = event.target.value;
        setStateRecipe(copiedRecipe);
    }

    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postRecipe(stateRecipe)
        
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <h3>Add a new Recipe</h3>
		
                

                <input 
                    type="text" 
                    placeholder= "Recipe name" 
                    name="name"
                    onChange={handleChange}
                    value={stateRecipe.name} />
                    <br></br>
		
		        <input 
                    type="text" 
                    placeholder= " Recipe description" 
                    name="description"
                    onChange={handleChange}
                    value={stateRecipe.description} />
                    <br></br>

		        <input 
                    type="text" 
                    placeholder="cooking time" 
                    name="cookingTime"
                    onChange={handleChange}
                    value={stateRecipe.cookingTime} />

		        <input 
                    type="text" 
                    placeholder="serving" 
                    name="servings"
                    onChange={handleChange}
                    value={stateRecipe.servings} />

                <input 
                    type="text" 
                    placeholder="calories" 
                    name="calories"
                    onChange={handleChange}
                    value={stateRecipe.calories} />

		        <input 
                    type="text" 
                    placeholder="Recipe method" 
                    name="method"
                    onChange={handleChange}
                    value={stateRecipe.method} />
                    <br></br>


                <button type="submit">Add New Recipe!</button>
            </form>
        </>
    )
}

export default RecipeForm;
