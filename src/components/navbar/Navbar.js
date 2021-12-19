import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    openBurger () {
        document.querySelector('.navbar-mobile-list-disabled').classList.toggle('navbar-mobile-list');
    }

    render () {
        return (
            <section className="navbar">
                <nav className="navbar-mobile">
                    <div className="navbar-mobile-burger">

                        <button onClick={this.openBurger}>
                            <i className="fas fa-bars"></i>
                        </button>
    
                        <div className="navbar-mobile-list-disabled">
                            <ul type="none">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
    
                <nav className="navbar-desktop">
                    <ul type="none">
                        <li><a className="navbar-links" href='/home'>Home</a></li>
                        <li><a className="navbar-links" href='/home'>About</a></li>
                        <li><a className="navbar-links" href='/home'>Portfolio</a></li>
                        <li><a className="navbar-contact" href='/about'>Contact</a></li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Navbar;