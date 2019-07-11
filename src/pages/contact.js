import React from "react"

const Contact = () => {
    const showIframe=( timeout = 5000)=> {
        document.getElementById("formIframe").style.visibility="visible";
        document.getElementById("formIframe").style.height=350+"px";
        document.getElementById("formIframe").style.width=100+"%";
    }
    const iframeStyle ={
        visibility:"hidden",
        height: 0
    }

    return (
        <div>
            <h1>Contact</h1>
            <div className="main contactComponent">
                <form id="contactForm" method="POST" action="https://formspree.io/arothstein90@gmail.com" target="iframe1">
                <h2>Let's Talk</h2>
                <br />
                    <input type="text" name="name" placeholder="Name"  size="80" required/>
                    <br/>
                    <input type="email" name="email" placeholder="Email" size="80"  required/>
                    <br/>
                    <textarea name="message" placeholder="Your message" cols="80" rows="8" required></textarea>
                    <br/>
                    <iframe id="formIframe" name="iframe1" src="target.html" style={iframeStyle}></iframe>
                    <br/>
                    <button type="submit" onClick={showIframe}>Send Message >> </button>         
                </form>

                <div id="contactInfo">
                    <div id="contactDetails">
                        <h3>Mayan Rothstein</h3>
                        <h4>Los Angeles, CA</h4>
                        <h4>mayan@bu.edu</h4>
                        <h4>858-705-5252</h4>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27409618435!2d-118.69192387726389!3d34.02016129881687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1562877271441!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}}  allowfullscreen id="map"></iframe>
                </div>

            </div>
        </div>
    )
}
export default Contact