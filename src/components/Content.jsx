import SingleRecipe from "./SingleRecipe";

export default function Content({ data, onHandleDel, handleLike }) {
  return (
    <div className="main-content">
      {data && (
        <h3 style={{ marginBottom: "20px" }}>You have {data.length} recipes</h3>
      )}
      <ul className="recipe-list">
        {data
          ? data.map((recipe, index) => (
              <SingleRecipe
                key={recipe["id"]}
                recipe={recipe}
                onHandleDel={onHandleDel}
                id={recipe.id}
                index={index}
                handleLike={handleLike}
              />
            ))
          : `You haven't collected any recipes! `}
      </ul>
    </div>
  );
}
