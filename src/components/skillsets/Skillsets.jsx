import { useState } from 'react'
import { logos } from './Logos'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import './Skillsets.css'

function Skillsets() {
    const [current, setCurrent] = useState(0);
    const [isActive, setActive] = useState(0);

    const nextSkill = () => {
        setCurrent(current === logos.length - 1 ? 0 : current + 1);
    }

    const prevSkill = () => {
        setCurrent(current === 0 ? logos.length - 1 : current - 1);
    }

    const showDescription = () => {
        setActive(!isActive);
    }

    return (
        <section className="skillsets">
            <div>
                <h3>Skill Sets</h3>
            </div>

            <div className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSkill} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSkill} />

                {logos.map((logo, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <div className="skillsets-image-container">
                                    <img src={logo.image} alt={logo.name} className="skillsets-image" />
                                    <div className="skillsets-image-overlay">
                                        <h4>{logo.name}</h4>
                                        <p>{logo.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skillsets
