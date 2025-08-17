import recipeData from "../recipeList.json";
import { useState } from "react";
import SingleRecipe from "./SingleRecipe";

const data = [...recipeData];

export default function Content() {
  const [recipeArr, setRecipeArr] = useState(data);

  function handleDelBtn(e) {
    console.log(e.target.dataset.id);
    console.log(e.target.dataset.index);
    const recipeId = e.target.dataset.id;
    const recipeIndex = e.target.dataset.index;
    if (recipeId == data[recipeIndex].id) {
      console.log(111);

      data.splice(recipeIndex, 1);
      console.log(data);

      setRecipeArr(data);
    }
  }
  return (
    <div className="main-content">
      <ul className="recipe-list">
        {recipeArr.map((recipe, index) => (
          <SingleRecipe
            key={recipe["id"]}
            recipe={recipe}
            onHandleDel={handleDelBtn}
            id={recipe.id}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
