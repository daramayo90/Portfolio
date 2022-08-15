import "./Navbar.css";
import { useState, useEffect } from "react";
import useTheme from "../../context/useTheme";

import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* Loading page */
  useEffect(() => {
    setInterval(() => {
      document.querySelector(".navbar").classList.add("is-loaded");
    }, 6900);
  }, []);

  /* On scroll hiding navbar */
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setIsScrolled(true);  
      } else { // if scroll up show the navbar
        setIsScrolled(false); 
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  /* Light/Dark Mode */
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  /* Mobile Menu */
  const openMenu = () => {
    setActive(!isActive);
  };

  return (
    <section className={isScrolled ? "navbar scrolled" : "navbar"}>
      <nav className="navbar-mobile">
        <div className="navbar-mobile-burger">
          <div className="toggle" onClick={toggleTheme}>
            {theme === "light" ? (
              <BsFillSunFill className="sun" />
            ) : (
              <BsMoonStarsFill className="moon" />
            )}
          </div>
          <button onClick={openMenu}>
            <i className="fas fa-bars"></i>
          </button>

          <div className={`${ isActive ? "navbar-mobile-list open" : "navbar-mobile-list" }`}>
            <IoMdClose className="icon" onClick={openMenu} />
            <ul type="none">
              <li onClick={openMenu}>
                <a href="#">Home</a>
              </li>
              <li onClick={openMenu}>
                <a href="#about">About</a>
              </li>
              <li onClick={openMenu}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={openMenu}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className={isScrolled ? "navbar-desktop scrolled" : "navbar-desktop"} >
        <ul type="none">
          <li>
            <a className="navbar-links" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#projects">
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
              {theme === "light" ? (
                <BsFillSunFill className="sun" />
              ) : (
                <BsMoonStarsFill className="moon" />
              )}
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
