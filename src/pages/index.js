import React, { Component } from "react"
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Layout from "../components/layout";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Intro from "./intro";

import AnchorLink from 'react-anchor-link-smooth-scroll'

function initializeReactGA() {
    ReactGA.initialize('UA-86430272-3');
    ReactGA.pageview('/porfolio');
}
initializeReactGA();

class IndexPage extends Component {
    render(){
        // const ieBackgrounds = () =>{
        //     // document.getElementById("layout").style.backgroundColor = "rgb(92, 69, 103, 0.25)";
        //     // document.getElementById("aboutsection").style.backgroundColor = "rgb(92, 69, 103, 0.2)";
        //     // document.getElementById("introsection").style.backgroundColor = "rgb(92, 69, 103, 0.2)";
        //     // document.getElementById("footer").style.backgroundColor = "rgb(92, 69, 103, 0.2)";
        // }
        // const backgorundColorSecondary = {
        //     backgroundColor:"rgb(92, 69, 103, 0.2)"
        // }
        return (
            <Layout id="layout" >
            <Helmet>
                <title>Mayan's Portfolio</title>
                <meta name="description" content="This is Mayan Rothstein's portfolio page!" />
                <meta name="keywords" content="HTML,CSS,Python,JavaScript, developer,coding,portfolio"/>
                <link rel="icon" href={require("../media/myMedia/MR_logo2_violet.png")}/>
            </Helmet>
            <div id="mainTitle">
                <p style={{fontSize: 20+"px"}}>Hello! My name is</p>
                <h1>Mayan Rothstein</h1> 
                <h2>I build intuitive & functional digital experiences</h2>
                    <br/> 
                <p id="oneLineBio">
                    <img alt="suitcase" src={require("../media/icons/suitcase.jpg")} height="20" style={{paddingRight: 10+"px"}}/>full_stack_developer<br/>
                    <img alt="location pin" src={require("../media/icons/location_pin.png")} height="20" style={{paddingRight: 11.5+"px"}}/>Los Angeles, CA
                </p> 
                    <br/>
                <button ><AnchorLink  id="chatLink" href="#contactsection">Let's Chat >></AnchorLink></button>
            </div>

            <div id="aboutsection" className="section" style={{marginTop: 15+"%"}}>
                <div className= "newSec" >
                    <About />
                </div> 
            </div>  

            <div id="projects_section" className="section">
             <div className= "newSec" >
                <Projects className="innerBox"/> 
            </div>
            </div>  

            <div id="introsection" className="section">
                <div className= "newSec">
                    <Intro className="innerBox"/>
                </div>
            </div>      

            <div id="contactsection" className="section" >
                <div className= "newSec">
                    <Contact className="innerBox"/>
                </div> 
            </div>    

            </Layout>
        )
    }
}
export default IndexPage
