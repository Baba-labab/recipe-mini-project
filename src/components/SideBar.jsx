import { NavLink } from "react-router-dom"


export default function SideBar() {
  return (
    <nav className="side-bar">
      <NavLink to="/" className="side-bar-list">Home</NavLink>
      <NavLink to="/new-recipe"  className="side-bar-list">New Recipe</NavLink>
      <NavLink to="/update-recipe"  className="side-bar-list">Update Recipe</NavLink>
      <NavLink to="/about"  className="side-bar-list">About</NavLink>
      <NavLink to="/favorites"  className="side-bar-list">My Favorite Recipes</NavLink>
      <li className="side-bar-list">My Profile</li>

    </nav>
  );
}
