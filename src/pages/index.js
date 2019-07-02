import React, { Component, Fragment } from "react"

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
                <h2>I build intuitive & function digital experiences</h2>
                    <br/> 
                <p id="oneLineBio">full-stack developer based in Los Angeles, CA</p> 
                    <br/>
                <button ><AnchorLink  id="chatLink" href="#contactsection">Let's Chat >></AnchorLink></button>
            </div>

            <div id="aboutsection" className="section" >
                <div className= "newSec">
                    <About />
                </div> 
            </div>  

            <div id="projects_section" className="section">
             <div className= "newSec">
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
