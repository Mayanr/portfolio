import React from "react"
import Layout from "../components/layout"


const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div className="content">
                <form method="POST" action="https://formspree.io/arothstein90@gmail.com">
                <input type="text" name="name" placeholder="Name" size="50"/>
                <br/>
                <input type="email" name="email" placeholder="Email" size="50"/>
                <br/>
                <textarea name="message" placeholder="Your message" cols="51.5" rows="8"></textarea>
                <br/>
                <button type="submit">Send Message >> </button>
                </form>
            </div>
        </div>
    )
}
export default Contact