import recipeData from "../recipeList.json";
import { useState } from "react";
import SingleRecipe from "./SingleRecipe";

export default function Content() {
  const [recipeArr, setRecipeArr] = useState(recipeData);
  return (
    <div className="main-content">
      <ul className="recipe-list">
        {recipeArr.map((recipe) => (
          <SingleRecipe key={recipe["id"]} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}
