import React, { Component} from "react"



class TVShows extends Component {
    render(){
        return (
            <div className="main">
            
                <div className = "projectContent">
                    <h2>TV Show Search</h2>
                    <ul >
                        {/* Description:  */}
                        <li>Leveraging TV Maze's API, this site presents a vast collection of television shows and a filter that enables users to quickly discover shows that meet their TV-binging desires.</li>

                        <br />

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
                        <li>
                            <img />
                        </li>
                    </ul>
                </div>

                <a className="projectLink" href="https://mayanr.github.io/tvShows/shows" target="_blank">
                    <img className = "projectImg" src={require("../media/tvShows_thumbnail.jpg")}/>
                    <div className="clickLink">
                        <div className="linkText">Search For Shows</div>
                    </div>
                </a>
            </div>
        )
    }
}
export default TVShows