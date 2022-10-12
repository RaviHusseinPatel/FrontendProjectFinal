import {useState} from 'react';

const IngredientForm = ({postIngredient}) => {

    const [stateIngredient, setStateIngredient] = useState(
        {


		name: ""
		
	    

        }
    )

    const handleChange = (event) => {
        console.log(event)
        let propertyName = event.target.name; 
        let copiedIngredient = {...stateIngredient}
        copiedIngredient[propertyName] = event.target.value;
        setStateIngredient(copiedIngredient);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postIngredient(stateIngredient)
        
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <h3>Add a new Recipe</h3>
		
                

                <input 
                    type="text" 
                    placeholder= "Ingredient name" 
                    name="name"
                    onChange={handleChange}
                    value={stateIngredient.name} />
                    <br></br>
		
		        


                <button type="submit">Add New Ingredient!</button>
            </form>
        </>
    )
}

export default IngredientForm;