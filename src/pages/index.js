import React, { Component, Fragment } from "react"
import { Link } from "gatsby";
// import Footer from "../components/footer"
// import Header from "../components/header"

import Layout from "../components/layout";
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";
import Intro from "./intro";


class IndexPage extends Component {

    render(){
        return (
            <Layout>            
            <div id="introsection" className="section" >
                <div className="innerBox">
                    <Intro /> 
                </div>
            </div>  

            <div id="blogsection" className="section">
                <Blog className="innerBox"/> 
            </div>  

            <div id="aboutsection" className="section">
                <About className="innerBox"/> 
            </div>      

            <div id="contactsection" className="section">
                <Contact className="innerBox"/> 
            </div>                
            </Layout>
        )
    }
}
export default IndexPage
