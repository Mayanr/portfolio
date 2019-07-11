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
                                <li>Nav renders differently dependent on whether logged-in</li>
                                <li>Spinner indicates profiles are loading</li>
                            </ol>
                        </li>

                        <br />
                        {/* Technologies */}
                        <li className="techLogos">
                            <img alt="React" src={require("../media/tech_logos/react.png")} height="30px"/>
                            <img alt="Redux" src={require("../media/tech_logos/redux.png")}  height="30px"/>
                            <img alt="MongoDB" src={require("../media/tech_logos/mongodb.png")} height="50px"/>
                            <img alt="Github API" src={require("../media/tech_logos/github_api3.png")} title="Github API" height="45px"/>
                        </li>
                    </ul>

                    
                </div>

            </div>
        )
    }
}
export default DevConnector