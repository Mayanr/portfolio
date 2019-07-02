import React, { useRef} from "react"

import "../styles/index.css";

import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    const navbar = useRef();
    const toggleMenu =()=>{
        if (navbar.current.className === "navbar") {
            navbar.current.className += " responsive";
        } else {
            navbar.current.className = "navbar";
        }
    }

    return (
        <header>
            <nav className="navbar" id="mainNavbar" ref={navbar}>
                <a href="javascript:void(0);" className="icon" onClick={e =>toggleMenu()}>
                    <i className="fa fa-bars"></i>
                </a>
                <ul>
                    <li><AnchorLink href="#mainTitle" className="navItem"><img alt="logo" src="tbd"/></AnchorLink></li>
                    <li><AnchorLink href="#aboutsection" className="navItem">About</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#introsection">Intro</a></li> */}

                    <li><AnchorLink href="#projects_section"  className="navItem">Projects</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#blogsection">Blog</a></li> */}

                    <li><AnchorLink  href="#introsection" className="navItem">Intro</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#aboutsection">About</a></li> */}

                    <li><AnchorLink  href="#contactsection" className="navItem">Contact</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#contactsection">Contact</a></li> */}

                    {/* responsive nav menu */}

                </ul>
            </nav>
        </header>
    )
}
export default Header