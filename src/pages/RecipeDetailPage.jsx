import recipeData from "../recipeList.json";
import { useParams, NavLink } from "react-router-dom"


function RecipeDetailPage() {
    const { recipeId } = useParams();
    const singleRecipe = recipeData.find((recipe) => recipe.id === (recipeId))
    return (
        <div>
            <h2>Recipe Details</h2>
            <div className="recipe-detail">
                <h3>{singleRecipe.name}</h3>
                <img src={singleRecipe.image} alt={singleRecipe.name}/>
                <p>Calories: {singleRecipe.calories} kcal</p>
                <p>Servings: {singleRecipe.servings}{" "}
                    {singleRecipe.servings === 1 ? "person" : "people"}
                </p>

                <NavLink to="/" className="btn">Back</NavLink>
            </div>
        </div>
    )
}

export default RecipeDetailPage