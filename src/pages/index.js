import React, { Component, Fragment } from "react"

import Layout from "../components/layout";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Intro from "./intro";


class IndexPage extends Component {

    render(){
        return (
            <Layout>
            <div id="mainTitle">
                <p style={{fontSize: 20+"px"}}>Hello! My name is</p>
                <h1>Mayan Rothstein</h1> 
                <h2>I build intuitive & function digital experiences</h2>
                    <br/> 
                <p id="oneLineBio">I'm a full-stack software developer based in Los Angeles, CA specializing in......alkja eio ;ge kjtn k3wug oakvj</p> 
                    <br/>
                <button className="purple">Let's Chat >></button>
            </div>

            <div id="aboutsection" className="section" >
                    <About /> 
            </div>  

            <div id="projects_section" className="section">
                <Projects className="innerBox"/> 
            </div>  

            <div id="introsection" className="section">
                <Intro className="innerBox"/> 
            </div>      

            <div id="contactsection" className="section">
                <Contact className="innerBox"/> 
            </div>                
            </Layout>
        )
    }
}
export default IndexPage
