import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <img src="/icons/logo.svg" />
        </div>
        <div className="navbar__logo-text">ProVital</div>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Home</li>
      </ul>
      <div className="navbar__menu-icon">
        <img src="/icons/hamburger-icon.svg" />
      </div>
    </nav>
  );
}

export default Navbar;
