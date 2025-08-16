import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <div className="side-bar">
      <ul className="side-bar-list">
        <Link to="/" className="active">Home</Link>
        <Link to="/new-recipe">New Recipe</Link>
        <Link to="/update-recipe">Update Recipe</Link>
        <Link to="/about">About</Link>
        <Link to="/favorites">My Favorite Recipes</Link>
        <li>My Profile</li>
      </ul>
    </div>
  );
}
