import recipeData from "../recipeList.json";
import { useParams, NavLink } from "react-router-dom";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const singleRecipe = recipeData.find((recipe) => recipe.id === recipeId);

  if (!singleRecipe) {
    return <p>Recipe not found.</p>;
  }
  return (
    <div className="single-content">
      <div className="recipe-box">
        <h3>{singleRecipe.name}</h3>
        <img src={singleRecipe.image} alt={singleRecipe.name} />
        <p>Calories: {singleRecipe.calories} kcal</p>
        <p>
          Servings: {singleRecipe.servings}{" "}
          {singleRecipe.servings == 1 ? "person" : "people"}
        </p>

        <NavLink to="/" className="btn">
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
