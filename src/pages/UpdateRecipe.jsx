import Button from "../components/Button";
import {useState} from "react"

function UpdateRecipe({addEditedRecipe}) {
const [recipeName, setRecipeName] = useState(""); 
  const [image, setImage] = useState(""); 
  const [calories, setCalories] = useState(""); 
  const [servings, setServings] = useState(""); 

  const handleSubmit = (e) => {
  e.preventDefault(); 

  const updatedRecipe = {
    id,
    name: recipeName, 
    calories,
    image,  
    servings
  }; 

addEditedRecipe(updatedRecipe); 

setRecipeName(""); 
setImage(""); 
setCalories(""); 
setServings(""); 

}

  return (
    <div className="main-content">
      <h1 style={{ marginBottom: "50px" }}>Update My Recipe</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipe-title">Recipe's Name:</label>
            <input type="text" id="recipe-title" placeholder="Smashed Potatoes" value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="recipe-calories">
              Calories:
            </label>
            <input type="number" id="recipe-calories" placeholder="50" value={calories} onChange={(e)=>setCalories(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="recipe-serving">Number of Servings:</label>
            <input
              type="number"
              id="recipe-serving"
              placeholder="1"
              value={servings} onChange={(e)=>setServings(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="recipe-img">Link to Recipe Picture:</label>
            <input type="url" id="recipe-img" placeholder="https://img.com" value={image} onChange={(e)=>setImage(e.target.value)} />
          </div>

          <Button>save</Button>
        </form>
      </div>
    </div>
  );

}

export default UpdateRecipe
  



