import Button from "../components/Button";
function CreateNewRecipe() {
  return (
    <div className="main-content">
      <h2 style={{ marginBottom: "100px" }}>Create New Recipes</h2>
      <div>
        <form>
          <div>
            <label htmlFor="recipe-title">Input the recipe's name:</label>
            <input type="text" id="recipe-title" value="" />
          </div>

          <div>
            <label htmlFor="recipe-calories">
              Input the recipe's calories:
            </label>
            <input type="text" id="recipe-calories" value="" />
          </div>

          <div>
            <label htmlFor="recipe-serving">How many servings:</label>
            <input
              type="text"
              id="recipe-serving"
              value=""
              placeholder="1 person"
            />
          </div>

          <div>
            <input type="file" id="recipe-img" value="" />
            <label htmlFor="recipe-img">Upload the recipe picture</label>
          </div>

          <Button>save</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewRecipe;
