import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <ul>
                    <li><a href="https://github.com/daramayo90" target="_blank"><i className="fab fa-github icon"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/damian-aramayo/" target="_blank"><i className="fab fa-linkedin icon"></i></a></li>
                    <li><a href="mailto:damianm.aramayo@gmail.com" target="_blank"><i className="fab fa-google icon"></i></a></li>
                    <li><a href="https://wa.me/+5491136527688" target="_blank"><i className="fab fa-whatsapp icon"></i></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>Developed and designed by Damián Aramayo. All rights reserved. Copyright © 2022.</p>
            </div>
        </footer>
    )
}

export default Footer;