import "./Navbar.css";
import { useState, useEffect } from "react";
import useTheme from "../../context/useTheme";

import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setInterval(() => {
      document.querySelector(".navbar").classList.add("is-loaded");
    }, 6900);
  }, []);

  const openBurger = () => {
    setActive(!isActive);
  };

  /* Light / Dark Mode */
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <section className="navbar">
      <nav className="navbar-mobile">
        <div className="navbar-mobile-burger">
        <div className="toggle" onClick={toggleTheme}>            
            {theme === "light" 
              ? <BsFillSunFill className="sun" />
              : <BsMoonStarsFill className="moon" />}
              </div>
          <button onClick={openBurger}>
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`navbar-mobile-list-disabled ${
              isActive ? "navbar-mobile-list" : ""
            }`}
          >
            <ul type="none">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar-desktop">
        <ul type="none">
          <li>
            <a className="navbar-links" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-links" href="/home">
              About
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="navbar-contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <div className="toggle" onClick={toggleTheme}>            
            {theme === "light" 
              ? <BsFillSunFill className="sun" />
              : <BsMoonStarsFill className="moon" />}
              </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
