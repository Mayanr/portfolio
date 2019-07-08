import React, { Component} from "react"



class TVShows extends Component {
    render(){
        return (
            <div className="main projectMargin">
            
                <div className = "projectContent" >
                    <div className="projectTitle">
                        <h2>TV Show Search </h2>
                        {/* Links (github and  site link) */}
                        <a href="https://github.com/Mayanr/tvShows" target="_blank" rel="noopener noreferrer"><img alt="https://github.com/Mayanr/tvShows" src="https://image.flaticon.com/icons/svg/25/25231.svg"  height="20px"/></a>
                        <a href="https://mayanr.github.io/tvShows/shows" target="_blank" rel="noopener noreferrer"><img alt="https://mayanr.github.io/tvShows/shows" src="https://static.thenounproject.com/png/299638-200.png" height="20px"/></a>
                    </div>
                    <ul >
                        {/* Description:  */}
                        <li>Leveraging TVmaze's API, this site presents a vast collection of television shows and a filter that enables users to quickly discover shows that meet their TV-binging desires.</li>

                        <li > 
                            <p className="functionalities">Noteable Functionalities:</p>
                            <ol>
                                <li>Filter by genre and/or rating </li>
                                <li>Hover over show thumbnail to see summary</li>
                                <li>Click on a show to view more details (ie, full synopsis, runtime, premiere date, stars)</li>
                                <li>Hover over actors' photos to see image of the actor in character</li>
                            </ol>
                        </li>

                        <br />
                        {/* Technologies */}
                        <li className="techLogos">
                            <img alt="node.js" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"  height="25px"/>
                            <img alt="Angular" src="https://angular.io/assets/images/logos/angular/angular.png" height="35px"/>
                            <img alt="TV Maze API" src="https://static.tvmaze.com/images/api/tvm_api.png"  height="25px"/>
                        </li>
                    </ul>

                    
                </div>

                <a className="projectLink" href="https://mayanr.github.io/tvShows/shows" target="_blank" rel="noopener noreferrer">
                    <img className = "projectImg" src={require("../media/tvShows2_thumbnail.jpg")} alt="Site home page screenshot"/>
                    <div className="clickLink">
                        <div className="linkText">Search For Shows>></div>
                    </div>
                </a>
            </div>
        )
    }
}
export default TVShows