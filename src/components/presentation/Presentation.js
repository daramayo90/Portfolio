import React from 'react';
import profile from './profile.jpg';

function Presentation () {
    return (
        <section>
            <div>
                <img src={profile} className="presentation-profile-img" alt="profile" />
            </div>

            <div>
                <h1>Hi there, I'm Damián 👋</h1>
                <p>
                    I’m a <strong>Full Stack Web Developer</strong> based in Buenos Aires, Argentina.
                    <br />
                    I started building websites using technologies such as Wordpress, HTML, CSS and JavaScript.
                    <br /><br />
                    I take my craft seriously, having invested in taking my skills, improving myself every day to learn something new to push me forward in this learning path.
                    <br/><br />
                    I specialise in <strong>JavaScript</strong> and <strong>React.JS</strong> development. 
                    If you’re looking for an enthusiastic and proactive Web Developer, I’m confident that I can use my skills and expertise to help you!
                </p>
            </div>

            <div>
                <p>Do you need someone who:</p>

                <ul>
                    <li>Is super comfortable working in a team of developers, designers, or in a project team?</li>
                    <li>Is skilled at building fast, beautiful websites with the latest technology?</li>
                    <li>Is confident with problems solving?</li>
                    <li>Is proactive and quick learner?</li>
                    <li>Has demonstrated experience working with Agile Methodologies using Jira and Confluence?</li>
                    <li>Has ability to lead complex or multiple projects?</li>
                    <li>Has a Business and IT understanding?</li>
                </ul>

                <p><b>You're in the right place</b>, here's what to do next:</p>
            </div>

            <div>
                <button>Contact Me</button>
            </div>
        </section>
    );
}

export default Presentation;