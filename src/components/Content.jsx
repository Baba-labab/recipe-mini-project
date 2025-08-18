import SingleRecipe from "./SingleRecipe";

export default function Content({ data, onHandleDel, handleLike, children }) {
  return (
    <div className="main-content">
      {children}
      <ul className="recipe-list">
        {data &&
          data.map((recipe, index) => (
            <SingleRecipe
              key={recipe["id"]}
              recipe={recipe}
              onHandleDel={onHandleDel}
              id={recipe.id}
              index={index}
              handleLike={handleLike}
            />
          ))}
      </ul>
    </div>
  );
}
