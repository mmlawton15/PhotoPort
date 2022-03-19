import React, {useState} from "react";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;
    return (
        <section>
            <h1>Contact Me</h1>
            <form if="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} />
                </div>              
                <div>
                    <label htmlFor="message">Messgae:</label>
                    <textarea name ="message" rows="5" defaultValue={message}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;