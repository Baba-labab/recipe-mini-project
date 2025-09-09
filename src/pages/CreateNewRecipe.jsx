import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewRecipe({ addNewRecipe }) {
  const [recipeName, setRecipeName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      recipeName === "" ||
      image === "" ||
      calories === "" ||
      servings === ""
    ) {
      alert("Your content is empty");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name: recipeName,
      calories,
      image,
      servings,
      liked: false,
    };

    addNewRecipe(newRecipe);

    setRecipeName("");
    setImage("");
    setCalories("");
    setServings("");

    navigate("/");
  };

  return (
    <div
      className="main-content"
      style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}
    >
      <h1 style={{ marginBottom: "40px" }}>Create a New Recipe</h1>
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
              min={1}
              max={5000}
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
              min={1}
              max={10}
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

export default CreateNewRecipe;
