import Button from "../components/Button";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";

function RecipeDetailPage({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { recipeId } = useParams();
  const singleRecipe = data.find((recipe) => recipe.id === recipeId);

  if (!singleRecipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="main-content">
      <h2 style={{ marginBottom: "100px" }}>Recipe Details</h2>
      <div className="single-content">
        <div className="recipe-box recipe-detail">
          <img src={singleRecipe.image} alt={singleRecipe.name} />
          <h3 style={{ marginBottom: "10px" }}>{singleRecipe.name}</h3>
          <p>Calories: {singleRecipe.calories} kcal</p>
          <p style={{ marginBottom: "20px" }}>
            Servings: {singleRecipe.servings}{" "}
            {singleRecipe.servings == 1 ? "person" : "people"}
          </p>

          <NavLink to="/">
            <Button>Back</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
