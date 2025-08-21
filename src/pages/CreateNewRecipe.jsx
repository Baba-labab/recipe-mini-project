import Button from "../components/Button";
import {useState} from "react"

function CreateNewRecipe({addNewRecipe}) {
  const [recipeName, setRecipeName] = useState(""); 
  const [image, setImage] = useState(""); 
  const [calories, setCalories] = useState(""); 
  const [servings, setServings] = useState(""); 

const handleSubmit = (e) => {
  e.preventDefault(); 

  const newRecipe = {
    recipeName, 
    image, 
    calories, 
    servings
  }; 

addNewRecipe(newRecipe); 

setRecipeName(""); 
setImage(""); 
setCalories(""); 
setServings(""); 

}

  return (
    <div className="main-content">
      <h2 style={{ marginBottom: "100px" }}>Create New Recipes</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipe-title">Recipe's name:</label>
            <input type="text" id="recipe-title" placeholder="Smashed Potatoes"value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="recipe-calories">
              Calories:
            </label>
            <input type="text" id="recipe-calories" placeholder="50" value={calories} onChange={(e)=>setCalories(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="recipe-serving">Number of Servings:</label>
            <input
              type="text"
              id="recipe-serving"
              placeholder="1 person"
              value={servings} onChange={(e)=>setServings(e.target.value)}
            />
          </div>

          <div>
            <input type="url" id="recipe-img" placeholder="https://img.com" value={image} onChange={(e)=>setImage(e.target.value)} />
            <label htmlFor="recipe-img">Upload the recipe picture</label>
          </div>

          <Button>save</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewRecipe;
