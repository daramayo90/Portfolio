import './skillsets.css'

function Skillsets () {
    return (
        <section className="skillsets">
            <h1>Skill Sets</h1>
            <div className="skillsets-container">
                <div className="skillsets-box">
                    <h3>Front-End</h3>
                    <ul type="none">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React.js</li>
                    </ul>
                </div>

                <div className="skillsets-box">
                    <h3>Back-End</h3>
                    <ul type="none">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>EJS</li>
                        <li>HTTP Protocol</li>
                        <li>Sessions</li>
                        <li>Cookies</li>
                        <li>Password Hashing</li>
                    </ul>
                </div>

                <div className="skillsets-box">
                    <h3>Database</h3>
                    <ul type="none">
                        <li>SQL</li>
                        <li>Sequelize.js</li>
                        <li>Docker</li>
                        <li>APIs</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skillsets;