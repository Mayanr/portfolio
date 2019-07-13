import React from "react"

const Intro = () => {
    const displayTM= () => {
        document.getElementById("jobDesc").innerHTML = "<h3>B2B Marketing Operations</h3><p>Collaborated with Product, Strategy, and Executive staff to research fan data and craft narratives around TM’s tech products & services.</p>";
        // document.getElementsByClassName("clickedCompany").style.borderLeft = 0;
        document.getElementById("TM_logo").style.borderLeft = 10+"px solid red";
    }
    const displayRS = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>Product Marketing</h3><p> Created and edited B2B marketing content (e.g., blogs, white papers, personas, ebooks, articles, and decks).</p>";
        // document.getElementsByTagName("li").style.borderLeft = 0;
        document.getElementById("RS_logo").style.borderLeft = 10+"px solid red";

    }
    const displayPC = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>Marketing Operations</h3><p>Surveyed, researched, and collaborated cross-functionally to strategize effective tactics for campaign implementation to transform over 60,000 global employees into brand ambassadors.</p>"
    }
    const displayAi = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>my title</h3><p>Delivered multimedia presentations to generate leads, and evaluated consumer touchpoints to inspire opportunities for brand awareness. Exceeded goals: 111% (visits), 109% (presentations), 118% (interviews), 110% (applications).</p>"
    }
    return (
        <div onLoad={e =>displayTM()}>
         <h1>Career</h1>
            <div className="main">
            <h2>Professional Experience</h2> 
             <div id="resumeTable">
                <ul id="companySelection">
                    <li onClick={e =>displayTM()} id="TM_logo" className="clickedCompany"><img   alt="Ticketmaster Logo" src={require("../media/company_logos/tm.png")} height="20" title="Ticketmaster" /></li>

                    <li onClick={e =>displayRS()} id="RS_logo" className="clickedCompany"><img   alt="Riversand Logo" src={require("../media/company_logos/riversand.png")} height="25" title="Riversand Technologies" /></li>

                    <li onClick={e =>displayPC()} id="PC_logo" className="clickedCompany"><img  alt="Princess Cruises Logo" src={require("../media/company_logos/princess-cruises.png")} height="35" title="Princess Cruises" /></li>

                    <li onClick={e =>displayAi()} id="Ai_logo" className="clickedCompany"><img   alt="The Art Institutes Logo" src={require("../media/company_logos/Ai.png")} height="35" title="The Art Institutes" /></li>
                </ul>

                <div id="jobDesc">
                    <h3></h3>
                    <p></p>
                </div>
                 
             </div>
             <a href={require("../media/myMedia/mrothstein_visual_resume.pdf")} target="_blank" rel="noopener noreferrer">
                <button id="resume">View Resume >></button>
            </a>
            </div>
        </div>
    )
}
export default Intro