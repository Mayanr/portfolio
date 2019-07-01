import React from "react"
import TVShows from "../projects/tvShows"


const Projects = () => {
    return (
        <div>   
            <h1>Projects</h1>
                <TVShows />
            {/* <div className="main">
                <div className = "projectContent">
                    <p>Featured Project Title</p>
                    <ul >
                        <li>Description</li>
                        <li>Role</li>
                        <li>Challenge</li>
                        <li>Features</li>
                        <li>Technologies</li>
                    </ul>
                </div>

                <img className = "projectImg" src={require("../media/tvShows_thumbnail.jpg")} />
            </div> */}
        </div>
    )
}
export default Projects