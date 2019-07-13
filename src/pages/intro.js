import React from "react"

const Intro = () => {
    return (
        <div>
         <h1>Career</h1>
            <div className="main">
            <h2>Professional Experience</h2> 
             <table id="resumeTable">
                 <tbody>
                     <tr>
                        <td>B2B Marketing @<br/>
                        <img id="TM_logo"  alt="Ticketmaster Logo" src={require("../media/company_logos/tm.png")} height="20" title="Ticketmaster"/></td>
                        <td>
                            Collaborated with Product, Strategy, and Executive staff to research fan data and craft narratives around TM’s tech products & services.
                        </td>
                     </tr>
                     <tr>
                        <td>Product Marketing @<br/>
                        Riversand</td>
                        <td>
                            Created and edited B2B marketing content (e.g., blogs, white papers, personas, ebooks, articles, and decks).
                        </td>
                     </tr>
                     <tr>
                        <td>Marketing Strategy @<br/>
                        Princess Cruises</td>
                        <td>
                            Surveyed, researched, and collaborated cross-functionally to strategize effective tactics for campaign implementation to transform over 60,000 global employees into brand ambassadors.
                        </td>
                     </tr>
                 </tbody>
             </table>
             <a href={require("../media/myMedia/mrothstein_visual_resume.pdf")} target="_blank" rel="noopener noreferrer">
                <button id="resume">View Resume >></button>
            </a>
            </div>
        </div>
    )
}
export default Intro