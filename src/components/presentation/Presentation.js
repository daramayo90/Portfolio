import React from 'react';
import profile from './profile.jpg';

function Presentation () {
    return (
        <section>
            <div>
                <img src={profile} className="presentation-profile-img" alt="profile" />
            </div>

            <div>
                <h1>
                    Are You Looking For A <br />
                    Freelance Jamstack Developer?
                </h1>
            </div>

            <div>
                <p>Do you need someone who is:</p>

                <ul>
                    <li>Skilled at building fast, beautiful websites with the latest technology?</li>
                    <li>Comfortable both working in a team and individually?</li>
                    <li>Confident with the whole jamstack ecosystem?</li>
                </ul>

                <p><b>You're in the right place</b>, here's what to do next:</p>
            </div>

            <div>
                <button>Hire me</button>
                <button>Find out more</button>
            </div>
        </section>
    );
}

export default Presentation;