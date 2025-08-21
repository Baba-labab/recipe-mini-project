import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AboutPage from "./pages/AboutPage";
import CreateNewRecipe from "./pages/CreateNewRecipe";
import UpdateRecipe from "./pages/UpdateRecipe";
import ErrorPage from "./pages/ErrorPage";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import recipeData from "./recipeList.json";
import { useState } from "react";

function App() {
  const dataWithLike = recipeData.map((item) => {
    item.liked = false;
    return item;
  });
  // console.log(dataWithLike);
  const [recipeArr, setRecipeArr] = useState(dataWithLike);

  function handleDelBtn(e) {
    const recipeId = e.target.dataset.id;
    setRecipeArr((preDate) => {
      const newData = preDate.filter((obj) => obj.id != recipeId);
      return newData;
    });
  }

  function handleLike(recipeId) {
    setRecipeArr((pre) =>
      pre.map((item) => {
        return recipeId == item.id ? { ...item, liked: !item.liked } : item;
      })
    );
  }

 const handleAddRecipe = (newRecipe) => {
    setRecipeArr([...recipeArr, newRecipe])

  }

  return (
    <div className="container">
      <NavBar />
      <SideBar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              data={recipeArr}
              onHandleDel={handleDelBtn}
              onHandleLike={handleLike}
              // onReset={() => setRecipeArr(recipeArr)}
            />
          }
        />
        <Route
          path="/recipe-detail/:recipeId"
          element={<RecipeDetailPage data={recipeArr} />}
        />
        <Route path="/new-recipe" element={<CreateNewRecipe addNewRecipe={handleAddRecipe}/>} />
        <Route path="/update-recipe" element={<UpdateRecipe />} />
        <Route
          path="/favorites"
          element={
            <FavoriteRecipes
              data={recipeArr.filter((item) => item.liked)}
              onHandleDel={handleDelBtn}
              onHandleLike={handleLike}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
