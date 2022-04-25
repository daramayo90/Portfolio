import { useState } from 'react';
import { list } from './ProjectsList';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaExternalLinkAlt } from 'react-icons/fa';

import './Projects.css';

function Proyects() {
    const [current, setCurrent] = useState(0);

    const nextSkill = () => {
        setCurrent(current === list.length - 1 ? 0 : current + 1);
    }

    const prevSkill = () => {
        setCurrent(current === 0 ? list.length - 1 : current - 1);
    }

    return (
        <section id='portfolio'>
            <div className='projects'>
                <div className='title-wrapper'>
                    <h3 className='title'>My Projects</h3>
                    <p className='text'>
                        Here are some of the projects I have done
                    </p>
                </div>
                <div className='projects-wrapper'>
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSkill} />


                    {list.map((project, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <div className="project-image-container">
                                        <div className="desktop">
                                            <img src={project.imageDesktop} alt={project.name} className="project-image" />
                                        </div>
                                        <div className="mobile">
                                            <img src={project.imageMobile} alt={project.name} className="project-image" />
                                        </div>

                                        <div className="project-image-overlay">
                                            <div className="text">
                                                <h4>{project.name}</h4>
                                                <p>{project.description}</p>
                                                <div className="project-buttons">
                                                    {!project.name.includes('Viandas') &&
                                                        <a href={project.github} target="blank">
                                                            <button className="github-link">GitHub</button>
                                                        </a>}
                                                    <a href={project.link} target="blank">
                                                        <button className="project-link">Preview <FaExternalLinkAlt className='external-icon' /></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        )
                    })}


                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSkill} />
                </div>
            </div>
        </section>
    )
}

export default Proyects;