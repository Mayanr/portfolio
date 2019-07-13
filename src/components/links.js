import React, { Fragment } from "react"


const Links = () => {

    return (
        <Fragment>
            <div className="sidebar"  >
                
                <ul id="myLinks">

                    <li><a id="cv" href={require("../media/myMedia/mrothstein_visual_resume.pdf")} className="social_links" target="_blank" rel="noopener noreferrer" title="my resume"><img id="GH_logo"  alt="my resume" src={require("../media/icons/cv.png")} height="30"/></a></li>

                    <li><a id="github" href="https://github.com/Mayanr" className="social_links" target="_blank" rel="noopener noreferrer">
                    <img id="GH_logo"  alt="https://github.com/Mayanr" src={require("../media/icons/github.png")} height="20"/></a></li>

                    <li><a id="linkedIn" href="https://www.linkedin.com/in/mayan-rothstein" className="social_links" target="_blank" rel="noopener noreferrer"><img id="LI_logo" alt="www.linkedin.com/in/mayan-rothstein" src={require("../media/icons/li.png")} height="20"/></a></li>

                    <li><a id="email" href="mailto:mayan@bu.edu" className="social_links" target="_blank" rel="noopener noreferrer"><img id="mail_logo" alt="mayam@bu.edu" src={require("../media/icons/email.png")} height="20"/></a></li>

                    <li><a id="instagram" href="https://www.instagram.com/mayanrothstein/" className="social_links" target="_blank" rel="noopener noreferrer"><img id="IG_logo" alt="https://www.instagram.com/mayanrothstein/" src={require("../media/icons/ig.png")} height="20"/></a></li>

                </ul> 
            </div>
            <div id="containsEmail"> 
                <p id="emailLeftSide">mayan@bu.edu</p>
            </div>
        </Fragment>
    )
}
export default Links