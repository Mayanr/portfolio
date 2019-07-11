import React, { Component} from "react"



class DevConnector extends Component {
    render(){
        return (
            <div className="main projectMargin alternatingProj">
            
            <a className="projectLink" href="https://github.com/Mayanr/SocialNetwork" target="_blank" rel="noopener noreferrer">
                    <img className = "projectImg" src={require("../media/myProjects/devConnector_thumbnail.jpg")} alt="Site home page screenshot"/>
                    <div className="clickLink">
                        {/* <div className="linkText">Connect with Developers>></div> */}
                        <div className="linkText">View Code on Github>></div>
                    </div>
                </a>

                <div className = "projectContent alternateSide">
                    <div className="projectTitle">
                        <h2>DevConnector</h2>
                        {/* Links (github and  site link) */}
                        <a href="https://github.com/Mayanr/SocialNetwork" target="_blank" rel="noopener noreferrer"><img alt="https://github.com/Mayanr/SocialNetwork" src={require("../media/icons/github.svg")}  height="20px"/></a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><img alt="" src={require("../media/icons/new_window.png")} height="20px"/></a> */}
                    </div>
                    <ul >
                        {/* Description:  */}
                        <li>
                        Coming Soon! Not yet live; Code available in Github.<br/>
                        A site for programmers to create a profile and connect with others in the field.

                        </li>
                        
                        <li > 
                            <p className="functionalities">Noteable Functionalities:</p>
                            <ol>
                                <li>Github API linked, profile page populating with the latest 5 repos for that profile</li>
                                <li>Gravatar pulls avatar associated with user email</li>
                                <li>Navigation renders different tabs dependent on whether logged-in</li>
                                <li>Spinner indicates profiles are loading</li>
                            </ol>
                        </li>

                        <br />
                        {/* Technologies */}
                        <li className="techLogos">
                            <img alt="Python" src={require("../media/tech_logos/python.png")}  height="40px"/>
                            <img alt="Django" src={require("../media/tech_logos/django.png")}  height="25px"/>
                            <img alt="SQLite" src={require("../media/tech_logos/sqlite.png")}  height="25px"/>
                            <img alt="Jinja" src={require("../media/tech_logos/jinja.png")}  height="30px"/>
                        </li>
                    </ul>

                    
                </div>

            </div>
        )
    }
}
export default DevConnector