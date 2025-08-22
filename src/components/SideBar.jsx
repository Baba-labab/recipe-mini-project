import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side-bar">
      <nav className="side-bar-list">
        <NavLink
          to="/"
          end
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/new-recipe"
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          New Recipe
        </NavLink>

        {/* <NavLink
          to="/update-recipe"
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          Update Recipe
        </NavLink> */}

        <NavLink
          to="/favorites"
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          My Favorite Recipes
        </NavLink>

        <NavLink
          to="/profile"
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          My Profile
        </NavLink>

        <NavLink
          to="/about"
          className={`side-bar-item ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}
