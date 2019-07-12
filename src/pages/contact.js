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
                    <input type="text" name="name" placeholder="Name"  size="800" required/>
                    <br/>
                    <input type="email" name="email" placeholder="Email" size="800"  required/>
                    <br/>
                    <textarea name="message" placeholder="Your message" cols="800" rows="8" required></textarea>
                    <br/>
                    <iframe id="formIframe" name="iframe1" src="target.html" style={iframeStyle}></iframe>
                    <br/>
                    <button type="submit" onClick={showIframe}>Send Message >> </button>         
                </form>

                {/* <div id="contactInfo"> */}
                    {/* <div id="contactDetails"> */}
                        {/* <h3>Mayan Rothstein</h3>
                        <h4>Los Angeles, CA</h4>
                        <h4>mayan@bu.edu</h4>
                        <h4>858-705-5252</h4> */}
                    {/* </div> */}
                    {/* <iframe height="470px" width="100%" frameBorder="0" scrolling="no" src={api_address} allowFullScreen=""></iframe> */}  
                
                {/* </div> */}

            </div>
        </div>
    )
}
export default Contact