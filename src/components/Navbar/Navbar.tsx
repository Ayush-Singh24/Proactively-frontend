import { useState } from "react";
import "./index.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <img src="/icons/logo.svg" />
        </div>
        <div className="navbar__logo-text">ProVital</div>
      </div>
      <ul
        className={`navbar__menu ${isMenuOpen ? "navbar__menu--active" : ""}`}
      >
        <li className="navbar__item">List your practice</li>
        <li className="navbar__item">For Employers</li>
        <li className="navbar__item">Courses</li>
        <li className="navbar__item">Books</li>
        <li className="navbar__item">Speakers</li>
        <li className="navbar__item">Doctors</li>
        <li className="navbar__item">Home</li>
      </ul>
      <div className="navbar__menu-icon" onClick={handleMenu}>
        {!isMenuOpen ? (
          <img src="/icons/hamburger-icon-open.svg" />
        ) : (
          <img src="icons/hamburger-icon-close.svg" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
