import profile from './profile.jpg';
import './presentation.css'

function Presentation () {
    return (
        <section className="presentation">
            <div className="presentation-flexbox">
                <div className="presentation-profile-div">
                    <img src={profile} className="presentation-profile-img" alt="profile" />
                </div>
                
                <div className="presentation-container">
                    <div className="presentation-intro">
                        <h1>Hi there, I'm Damián 👋</h1>
                        <h2>Full Stack Web Developer</h2>
                        <p>
                            <br/>
                            I started building websites using technologies such as Wordpress, HTML, CSS and JavaScript.
                            <br/><br/>
                            I take my craft seriously, having invested in taking my skills, improving myself every day to learn something new to push me forward in this learning path.
                            <br/><br/>
                            I specialise in <strong>JavaScript</strong> and <strong>React.JS</strong> development. 
                            If you’re looking for an enthusiastic and proactive Web Developer, I’m confident that I can use my skills and expertise to help you!
                            <br/><br/>
                        </p>
                    </div>

                    <div className="presentation-soft">
                        <p>Do you need someone who has:</p>
                        <br/>
                        <ul>
                            <li>Confidence with problems solving?</li>
                            <li>Ability to lead complex or multiple projects?</li>
                            <li>A Business and IT understanding?</li>
                            <li>Teamwork spirit?</li>
                            <li>Has demonstrated experience working with Agile Methodologies?</li>
                        </ul>
                        <br/>
                        <p><b>You're in the right place</b>, here's what to do next:</p>
                        <br/>
                    </div>

                    <div className="presentation-buttons">
                        <a className="contact-me" href="#contact">Contact me</a>
                        <a className="find-more" href="#">Find out more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;