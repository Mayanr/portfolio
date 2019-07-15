import React, { useRef } from "react"

import "../styles/index.css";

import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    // var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function() {
    //         var currentScrollPos = window.pageYOffset;
    //         if(window.innerWidth > 800){
    //             if (prevScrollpos > currentScrollPos ) {
    //                 document.getElementById("mainNavbar").style.top = "0";
    //             } else {
    //                 document.getElementById("mainNavbar").style.top = "-70px";
    //             }
    //         }
    //     prevScrollpos = currentScrollPos;
    //     } 

    const navbar = useRef();
    const i_icon = useRef();
    const toggleMenu =()=>{
        if (navbar.current.className === "navbar") {
            navbar.current.className += " responsive";
            // navbar.current.onClick += "closeMenu()";
            i_icon.current.className = "fa fa-window-close fa-lg";
        } else {
            navbar.current.className = "navbar";
            i_icon.current.className = "fa fa-bars fa-lg";
        }
    }
    const closeMenu = () => {
        navbar.current.className = "navbar";
        i_icon.current.className = "fa fa-bars fa-lg";
    }

    return (
        <header>
            <nav className="navbar" id="mainNavbar" ref={navbar}>
                <a href="javascript:void(0);" className="icon" onClick={e =>toggleMenu()}>
                    <i className="fa fa-bars fa-lg" ref={i_icon}></i>
                </a>
                
                <ul>
                    <li id="myLogo"><AnchorLink href="#mainTitle" onClick={e =>closeMenu()}><img id="myLogo_img" alt="MR logo" src={require("../media/myMedia/MR_logo2.png")} height="35"/></AnchorLink></li>

                    <li><AnchorLink href="#aboutsection" className="navItem" onClick={e =>closeMenu()}>About</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#introsection">Intro</a></li> */}

                    <li><AnchorLink href="#projects_section"  className="navItem" onClick={e =>closeMenu()}>Projects</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#blogsection">Blog</a></li> */}

                    <li><AnchorLink  href="#introsection" className="navItem" onClick={e =>closeMenu()}>Career</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#aboutsection">About</a></li> */}

                    <li><AnchorLink  href="#contactsection" className="navItem" onClick={e =>closeMenu()}>Contact</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#contactsection">Contact</a></li> */}

                    {/* responsive nav menu */}

                </ul>
                <div id="escapeNav" onClick={e =>closeMenu()}></div>
            </nav>
        </header>
    )
}
export default Header