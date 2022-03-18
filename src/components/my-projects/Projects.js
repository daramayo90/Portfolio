import { useState } from 'react';
import { list } from './ProjectsList';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
        <section className='projects'>
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
                                    <img src={project.image} alt={project.name} className="project-image" />
                                    <div className="project-image-overlay">
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        <div className="projec-buttons">
                                            <a href={project.github} target="blank">
                                                <button>GitHub</button>
                                            </a>
                                            <a href={project.link} target="blank">
                                                <button>Preview</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}


                <FaArrowAltCircleRight className="right-arrow" onClick={nextSkill} />
            </div>
        </section>
    )
}

export default Proyects;