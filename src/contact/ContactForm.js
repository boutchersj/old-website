import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact-form">
            <h2 className="form-title">Let's have a chat over coffee!</h2>
            <div className="form-container">
                <form action="https://formspree.io/boutchersj@gmail.com" method="POST">
                    <input id="name" className="input-name" type="text" name="name" placeholder="Name" required />
                    <input id="email" className="input-email" type="email" name="email" placeholder="Email" required />
                    <textarea id="message" className="input-message" name="message" placeholder="Write a message..." required />
                    <button id="submit" className="btn-submit" type="submit" name="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}