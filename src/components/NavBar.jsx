export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="../public/image/logo.png" />
      </div>
      <div className="search">
        <input
          type="text"
          className="search-text"
          placeholder="find your recipe here..."
        />
        <button className="search-btn">Search</button>
      </div>
      <ul className="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </div>
  );
}
