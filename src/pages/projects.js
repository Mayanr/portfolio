import React from "react";
import TVShows from "../projects/tvShows";
import Ecommerce from "../projects/ecommerce";
import EcomAdmin from "../projects/ecomAdmin";

const Projects = () => {
    return (
        <div>   
            <h1>Projects</h1>
            <div className="projectComponent" style={{marginTop: 0}}>
                <TVShows />
            </div>
            <div className="projectComponent">
                <Ecommerce />
            </div>
            <div className="projectComponent">
                <EcomAdmin />
            </div>
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