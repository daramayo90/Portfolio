import "./Presentation.css";

import { useEffect } from "react";

import profile from "./profile.jpg";
import { BsCloudDownload } from "react-icons/bs";

function Presentation() {
  useEffect(() => {
    setInterval(() => {
      const titles = document.querySelectorAll(".loading-first-overlay");
      titles.forEach((title) => title.classList.add("is-reveal"));
    }, 5000);

    setInterval(() => {
      const titles = document.querySelectorAll(".loading-second-overlay");
      titles.forEach((title) => title.classList.add("is-reveal"));
    }, 6000);

    setInterval(() => {
      const titles = document.querySelectorAll(".loading-third-overlay");
      titles.forEach((title) => title.classList.add("is-reveal"));
    }, 6500);
  }, []);

  return (
    <section className="presentation">
      <div className="presentation-flexbox">
        <div className="presentation-profile-div">
          <img
            src={profile}
            className="presentation-profile-img"
            alt="profile"
          />
        </div>

        <div className="presentation-container">
          <div className="presentation-intro">
            <h1>Damián Aramayo</h1>
            <div className="loading-container">
              <div className="loading-first-overlay"></div>
              <h2>Full Stack Web Developer</h2>
            </div>
            <div className="loading-container">
              <div className="loading-second-overlay"></div>
              <p>
                Welcome to my portfolio website. I'm a Software Developer with a
                positive attitude, a strong work ethic, looking for results
                while focusing on high quality and code performance.
              </p>
            </div>
          </div>

          <div className="loading-container">
            <div className="loading-third-overlay"></div>
            <div className="presentation-buttons">
              <button className="contact-me">Contact Me</button>
              <button className="find-more">
                <span>Download CV</span>
                <BsCloudDownload className="icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="loading-container">
          <div className="loading-third-overlay"></div>
          <div className="presentation-soft">
            <div className="title">
              <h2>Why would it be a Good Option to Hire Me?</h2>
            </div>
            <div className="info">
              <p>
                Do you need someone who has confidence with problems solving,
                ability to lead complex or multiple projects, a Business and IT
                understanding, Teamwork Spirit and has demonstrated experience
                working with Agile Methodologies?
                <br />
                <br />
                <b>You're in the right place.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
