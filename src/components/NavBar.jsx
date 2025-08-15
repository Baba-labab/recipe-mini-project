export default function NavBar() {
  return (
    <div className="nav-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#444"
        className="menu-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className="user">
        <img src="../public/image/logo2.png" className="logo" />
        <span className="greeting">Hello, user</span>
        <span className="log-out">Log out</span>
      </div>
    </div>
  );
}
