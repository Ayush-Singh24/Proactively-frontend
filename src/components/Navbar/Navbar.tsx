import { useState } from "react";
import "./index.css";

const navbarItems: string[] = [
  "Doctors",
  "Speakers",
  "Books",
  "Courses",
  "For Employers",
  "List your practice",
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar__container">
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
          <div className="popover__container">
            <LoginPopover />
          </div>
          <li className="navbar__item-login">
            <span>Login/Signup</span>
            <img src="/icons/chevron-down.svg" />
            <div className="test">
              <LoginPopover />
            </div>
          </li>
          {navbarItems.map((item, index) => (
            <li className="navbar__item" key={index}>
              <span>{item}</span>
              <img src="/icons/arrow-right.svg" />
            </li>
          ))}
        </ul>
        <div className="navbar__menu-icon" onClick={handleMenu}>
          {!isMenuOpen ? (
            <img src="/icons/hamburger-icon-open.svg" />
          ) : (
            <img src="icons/hamburger-icon-close.svg" />
          )}
        </div>
      </nav>
    </div>
  );
}

function LoginPopover() {
  return (
    <div className="popover">
      <div className="popover__user">
        <span className="popover__user-type">Doctor</span>
        <div className="popover__user-options">
          <a>Login</a>
          <a>Sign up</a>
        </div>
      </div>
      <div className="popover__user">
        <span className="popover__user-type">Patient</span>
        <div className="popover__user-options">
          <a>Login</a>
          <a>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
