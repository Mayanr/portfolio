import React from "react"
import { Link } from "gatsby";

import "../styles/index.css";

import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><AnchorLink href="#introsection" className="navItem">Home</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#introsection">Intro</a></li> */}

                    <li><AnchorLink href="#blogsection"  className="navItem">Blog</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#blogsection">Blog</a></li> */}

                    <li><AnchorLink  href="#aboutsection" className="navItem">About</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#aboutsection">About</a></li> */}

                    <li><AnchorLink  href="#contactsection" className="navItem">Contact</AnchorLink></li>
                    {/* <li><a  className="navItem" href="/#contactsection">Contact</a></li> */}

                </ul>
            </nav>
        </header>
    )
}
export default Header