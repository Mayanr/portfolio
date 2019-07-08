import React from "react"

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div className="main">
                <form id="contactForm" method="POST" action="https://formspree.io/arothstein90@gmail.com" target="_blank">
                <h2>Let's Talk</h2>
                <br />
                    <input type="text" name="name" placeholder="Name" size="50"/>
                    <br/>
                    <input type="email" name="email" placeholder="Email" size="50"/>
                    <br/>
                    <textarea name="message" placeholder="Your message" cols="51.5" rows="8"></textarea>
                    <br/>
                    <button type="submit">Send Message >> </button>
                </form>

                <div id="contactInfo">
                    <h3>Mayan Rothstein</h3>
                    <h4>Los Angeles, CA</h4>
                    <h4>mayan@bu.edu</h4>
                    <h4>858-705-5252</h4>
                </div>

            </div>
        </div>
    )
}
export default Contact