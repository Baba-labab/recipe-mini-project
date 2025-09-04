import Button from "../components/Button";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateRecipe from "./UpdateRecipe";

function RecipeDetailPage({ data, onHandleUpdate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isclicked, setIsClicked] = useState(false);
  const { recipeId } = useParams();
  const singleRecipe = data.find((recipe) => recipe.id === recipeId);

  if (!singleRecipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <>
      {isclicked ? (
        <UpdateRecipe
          singleRecipe={singleRecipe}
          data={data}
          onHandleUpdate={onHandleUpdate}
        />
      ) : (
        <div className="main-content">
          <h1 style={{ marginBottom: "50px" }}>Recipe Details</h1>
          <div className="single-content">
            <div className="recipe-box recipe-detail">
              <img src={singleRecipe.image} alt={singleRecipe.name} />
              <h3 style={{ marginBottom: "10px" }}>{singleRecipe.name}</h3>
              <p>Calories: {singleRecipe.calories} kcal</p>
              <p style={{ marginBottom: "20px" }}>
                Servings: {singleRecipe.servings}{" "}
                {singleRecipe.servings == 1 ? "person" : "people"}
              </p>

              {/* <NavLink to="/update-recipe"> */}
              <button className="btn" onClick={() => setIsClicked(true)}>
                Edit
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetailPage;
