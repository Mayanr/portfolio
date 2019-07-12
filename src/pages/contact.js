import React from "react"
/*global google*/


const Contact = () => {
    // var google = window.google = window.google ? window.google : {}

    // const initMap=()=> {
    //     const google = window.google = window.google ? window.google : {}
    //     // The location of Uluru
    //     var uluru = {lat: -25.344, lng: 131.036};
    //     // The map, centered at Uluru
    //     var map = new google.maps.Map(
    //         document.getElementById('map'), {zoom: 4, center: uluru});
    //     // The marker, positioned at Uluru
    //     var marker = new google.maps.Marker({position: uluru, map: map});
    // }
    // const OPEN_MAP_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFx2cLKtSno-E_W0EOPRG4B8G9onzlnlk&callback";
    // const requestURL = `${OPEN_MAP_URL}=${initMap()}`
    // const api_address =fetch(requestURL, {mode: "no-cors"});
    
    // const initMap =() =>{
    //     const api_address ="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFx2cLKtSno-E_W0EOPRG4B8G9onzlnlk&callback=initMap"
    //     let myReq = new Request(api_address);

    //     return fetch(myReq, {mode: "no-cors"})
    //         .then(function(response) {
    //         if (!response.ok) {
    //             throw new Error('HTTP error, status = ' + response.status);
    //         }
    //         return response.blob();
    //         })
    //         .then(function(response) {
    //             console.log("success")
    //         });
    // }
    
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
                    {/* <div id="contactDetails"> */}
                        <h3>Mayan Rothstein</h3>
                        <h4>Los Angeles, CA</h4>
                        <h4>mayan@bu.edu</h4>
                        <h4>858-705-5252</h4>
                    {/* </div> */}
                    {/* <iframe height="470px" width="100%" frameBorder="0" scrolling="no" src={api_address} allowFullScreen=""></iframe> */}
                   
                
                </div>

            </div>
        </div>
    )
}
export default Contact