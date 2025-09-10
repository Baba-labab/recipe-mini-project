import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateRecipe({ singleRecipe, onHandleUpdate }) {
  const [recipeName, setRecipeName] = useState(singleRecipe.name);
  const [image, setImage] = useState(singleRecipe.image);
  const [calories, setCalories] = useState(singleRecipe.calories);
  const [servings, setServings] = useState(singleRecipe.servings);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      id: singleRecipe.id,
      name: recipeName,
      calories,
      image,
      servings,
      liked: singleRecipe.liked,
    };

    onHandleUpdate(updatedRecipe);
    navigate("/");

    // setRecipeName("");
    // setImage("");
    // setCalories("");
    // setServings("");
  };

  return (
    <div
      className="main-content"
      style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}
    >
      <h1 style={{ marginBottom: "40px" }}>Update My Recipe</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipe-title">Recipe's Name:</label>
            <input
              type="text"
              id="recipe-title"
              placeholder="Smashed Potatoes"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="recipe-calories">Calories:</label>
            <input
              type="number"
              id="recipe-calories"
              placeholder="50"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="recipe-serving">Number of Servings:</label>
            <input
              type="number"
              id="recipe-serving"
              placeholder="1"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="recipe-img">Link to Recipe Picture:</label>
            <input
              type="url"
              id="recipe-img"
              placeholder="https://img.com"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <Button>save</Button>
        </form>
      </div>
    </div>
  );
}

export default UpdateRecipe;
