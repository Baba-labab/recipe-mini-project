import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage"; 
import RecipeDetailPage from "./pages/RecipeDetailPage"; 
import AboutPage from "./pages/AboutPage"; 
import CreateNewRecipe from "./pages/CreateNewRecipe";
import UpdateRecipe from "./pages/UpdateRecipe"; 
import ErrorPage from "./pages/ErrorPage";
import FavoriteRecipe from "./pages/FavoriteRecipes"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <NavBar />
      <SideBar />
      <Footer />

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/recipe-detail" element={<RecipeDetailPage />} />
  <Route path="/new-recipe" element={<CreateNewRecipe />} />
  <Route path="/update-recipe" element={<UpdateRecipe />} />
  <Route path="/favorites" element={<FavoriteRecipe />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>
      
    </div>
  );
}

export default App;
