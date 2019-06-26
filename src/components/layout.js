import React from "react";

import Header from "./header";
import Footer from "./footer";

import "../styles/index.css"

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div className="wrapper">
                <div className="content">
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default Layout