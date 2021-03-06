import React from "react";

import Header from "./header";
import Footer from "./footer";
import Links from "./links";

import "../styles/index.css"

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div className="wrapper">
                <div className="content">
                    {props.children}
                </div>
                <Links/>
                <Footer id="footer"/>
            </div>
        </div>
    )
}
export default Layout