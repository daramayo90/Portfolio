import "./_styles.css";
import { projectslist } from "./ProjectsList";
import { BsArrowRight } from 'react-icons/bs';

function Projects() {
  return (
    <section className="projects">
      {projectslist.map((project) => {
        return (
          <div className="container" key={project.id}>
            <div className={project.id % 2 !== 0 ? "description" : "description pair"}>
              <div className="count">{project.count}</div>
              <div className="tagline">
                <div className="tagline-line"></div>
                <h5 className="heading-tagline">{project.heading}</h5>
              </div>
              <h2 className="head">{project.head}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="link-to">
                <div className="read-more">Link to</div>
                <div className="icon-scroll">
                    <BsArrowRight className="icon" />
                </div>
              </a>
            </div>
            <img className="image" src={project.image} alt={project.head} />
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
