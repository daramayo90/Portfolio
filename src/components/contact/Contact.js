function Contact () {
    return (
        <section>
            <div>
                <h1>Want to work with me?</h1>
                <p>I’d love to work with you too! Let me know exactly what you need by filling out the contact form here. I’ll get back to you within 24 hours.</p>
            </div>

            <div>
                <form>
                    <div>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Message" />
                    </div>
                    <div>
                        <button type="submit">Contact Me</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;