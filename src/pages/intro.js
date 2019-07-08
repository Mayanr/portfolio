import React from "react"


const Intro = () => {
    return (
        <div>
         <h1>Career</h1>
            <div className="main">
            <h2>Professional Experience</h2> 
             <table>
                 <tbody>
                     <tr>
                        <td>Ticketmaster</td>
                        <td>B2B Marketing</td>
                        <td>
                            Collaborated with Product, Strategy, and Executive staff to research fan data and craft narratives around TM’s tech products & services.
                        </td>
                     </tr>
                     <tr>
                        <td>Riversand</td>
                        <td>Product Marketing</td>
                        <td>
                            Created and edited B2B marketing content (e.g., blogs, white papers, personas, ebooks, articles, and decks).
                        </td>
                     </tr>
                     <tr>
                        <td>Princess Cruises</td>
                        <td>Marketing</td>
                        <td>
                            Surveyed, researched, and collaborated cross-functionally to strategize effective tactics for campaign implementation to transform over 60,000 global employees into brand ambassadors.
                        </td>
                     </tr>
                 </tbody>
             </table>
            <button id="resume">View Resume >></button>
            </div>
        
            {/* <p> Need a developer? <a href="/contact">Contact Me!</a></p>
            <p> Need a developer? <Link to="/contact">Contact Me!</Link></p> */}
        </div>
    )
}
export default Intro