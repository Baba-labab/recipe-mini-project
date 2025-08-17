import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function SingleRecipe({ recipe, id, onHandleDel, index }) {
  const [like, setLike] = useState(false);

  return (
    <li className="recipe-box">
      <NavLink to={`/recipe-detail/${recipe.id}`}>
        <div className="recipe-img">
          <img src={recipe["image"]} />
        </div>

        <div className="recipe-text">
          <p style={{ color: "#fd7e14", fontWeight: 600 }}>{recipe["name"]}</p>
          <p>calories: {recipe["calories"]}kcal</p>
          <p>
            serving for {recipe["servings"]}{" "}
            <span>{recipe["servings"] === 1 ? "person" : "people"}</span>{" "}
          </p>
        </div>
      </NavLink>

      <div className="btns">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={like ? "red" : "#aaa"}
          className="like-icon"
          onClick={() => setLike((like) => !like)}
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>

        <button
          className="btn"
          data-index={index}
          data-id={id}
          onClick={() => onHandleDel(event)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
