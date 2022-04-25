import { useRef, useState } from 'react';
import './Contact.css'

function Contact () {
    const email = useRef();
    const error = useRef();
    const errorSubmit = useRef();
    const [hasErrors, setError] = useState(false);

    const emailValidation = () => {
        const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

        if (email.current.value == "") {
            error.current.innerText = "Where has the email gone?";
            setErrors(true);
        } else if (!isEmail.test(String(email.current.value).toLowerCase())) {
            error.current.innerText = "Please, enter a valid email to continue";
            setErrors(true);
        } else {
            error.current.innerText = "";
            setErrors(false);
        }
    }

    const setErrors = (e) => {
        setError(e);
    }

    const submitContact = e => {
        if (error.current.innerText != ""){
            e.preventDefault();
            errorSubmit.current.innerText = "Please, validate your errors first";
        }
        if (email.current.value == "") {
            e.preventDefault();
            emailValidation();
        }
    }

    return (
        <section id="contact">
            <div className="contact-intro">
                <h1>Want to work with me?</h1>
                <p>I'd love to work with you too! Let me know exactly what you need by filling out the contact form here. I'll get back to you within 24 hours.</p>
            </div>

            <div className="contact-form-container">
                <form className="contact-form" onSubmit={submitContact}>
                    <div>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" ref={email} onBlur={emailValidation} className={`${hasErrors ? "error" : ""}`} />
                        <span ref={error}></span>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Message" />
                    </div>
                    <div className="contact-form-button">
                        <button type="submit">Contact Me</button>
                        <span ref={errorSubmit}></span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;