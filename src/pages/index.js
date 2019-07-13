import React, { Component } from "react"

import Layout from "../components/layout";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Intro from "./intro";

import AnchorLink from 'react-anchor-link-smooth-scroll'

class IndexPage extends Component {

    render(){
        return (
            <Layout>
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

            <div id="aboutsection" className="section" >
                <div className= "newSec" style={{marginTop: 0}}>
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

            <div id="contactsection" className="section">
                <div className= "newSec">
                    <Contact className="innerBox"/>
                </div> 
            </div>    

            </Layout>
        )
    }
}
export default IndexPage
