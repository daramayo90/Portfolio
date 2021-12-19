import { useState } from 'react';
import './navbar.css'

function Navbar () {
    const [isActive, setActive] = useState(false);

    const openBurger = () => {
        setActive(!isActive);
    }

    return (
        <section className="navbar">
            <nav className="navbar-mobile">
                <div className="navbar-mobile-burger">

                    <button onClick={openBurger}>
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className={`navbar-mobile-list-disabled ${isActive ? "navbar-mobile-list" : ""}`}>
                        <ul type="none">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>

            <nav className="navbar-desktop">
                <ul type="none">
                    <li><a className="navbar-links" href='/home'>Home</a></li>
                    <li><a className="navbar-links" href='/home'>About</a></li>
                    <li><a className="navbar-links" href='/home'>Portfolio</a></li>
                    <li><a className="navbar-contact" href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </section>
    );

}

export default Navbar;