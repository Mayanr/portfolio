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
        </div>
    )
}
export default Projects