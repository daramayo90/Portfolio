import './contact.css'

function Contact () {
    return (
        <section className="contact">
            <div className="contact-intro">
                <h1>Want to work with me?</h1>
                <p>I’d love to work with you too! Let me know exactly what you need by filling out the contact form here. I’ll get back to you within 24 hours.</p>
            </div>

            <div className="contact-form-container">
                <form className="contact-form">
                    <div>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="contact-form-button">
                        <button type="submit">Contact Me</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;