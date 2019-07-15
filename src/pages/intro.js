import React, {Component} from "react"


// const Intro = () => {
class Intro extends Component {
    render(){
    // const TMclickedOnLoad= () => {
    //     // document.getElementById('TM_logo').focus();
    //     displayTM();
    //     // window.location = "#top";
    // }
    // const scrollToTop = () => {
    //     window.scrollTo(0,0);
    //     // window.location("#top");
    //     document.getElementById('#top').scrollIntoView();
    // }
    const displayTM= () => {
        document.getElementById("jobDesc").innerHTML = "<h3>B2B Marketing Operations</h3><p>Collaborated with Product, Strategy, and Executive staff to research fan data and craft narratives around TM’s tech products & services.<br/> Produced communications around GTM and product positioning such that 400+ client-facing reps have the latest product and industry knowledge to relay to 12,000+ clients, supporting deals amounting to $500+ million annually, a 19% YoY increase.</p>";
        // document.getElementsByClassName("clickedCompany").style.borderLeft = 0;
        //set all unselected to 
        document.getElementById("RS_logo").style.borderLeft = 0;
        document.getElementById("RS_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("PC_logo").style.borderLeft = 0;
        document.getElementById("PC_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("Ai_logo").style.borderLeft = 0;
        document.getElementById("Ai_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        //set selected
        document.getElementById("TM_logo").style.borderLeft = 2+"px solid #4B2187";
        document.getElementById("TM_logo").style.backgroundColor = " #B5ACC0";
        // document.getElementById("TM_logo").style.width = 198+"px";
    }
    const displayRS = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>Product Marketing</h3><p> Collaborated closely with product team to understand use cases and determined common customer journeys to devise value propositions and go to market strategy. Created and edited B2B marketing content (including but not limted to: blogs, white papers, personas, ebooks, articles, and decks).</p>";
        // document.getElementsByClassName("clickedCompany").style.borderLeft = 0;
        // document.getElementsByClassName("clickedCompany").style.borderLeft = 0;

        //set all unselected to 
        document.getElementById("TM_logo").style.borderLeft = 0;
        document.getElementById("TM_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("PC_logo").style.borderLeft = 0;
        document.getElementById("PC_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("Ai_logo").style.borderLeft = 0;
        document.getElementById("Ai_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        //set selected
        document.getElementById("RS_logo").style.borderLeft =  2+"px solid #4B2187";
        document.getElementById("RS_logo").style.backgroundColor = " #B5ACC0";
        // document.getElementById("RS_logo").style.width = 198+"px";
    }
    const displayPC = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>Marketing Operations</h3><p>Devised a one-year marketing campaign, an initiative focused on promoting the Princess brand narrative to consumers through a unique, yet under-utilized marketing channel—employees.<br/>Surveyed, researched, and collaborated cross-functionally to strategize effective tactics for campaign implementation to transform over 60,000 global employees into brand ambassadors.</p>";

        //set all unselected to 
        document.getElementById("TM_logo").style.borderLeft = 0;
        document.getElementById("TM_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("RS_logo").style.borderLeft = 0;
        document.getElementById("RS_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("Ai_logo").style.borderLeft = 0;
        document.getElementById("Ai_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        //set selected
        document.getElementById("PC_logo").style.borderLeft =  2+"px solid #4B2187";
        document.getElementById("PC_logo").style.backgroundColor = " #B5ACC0";
        // document.getElementById("PC_logo").style.width = 198+"px";
    }
    const displayAi = () => {
        document.getElementById("jobDesc").innerHTML = "<h3>Marketing Representative</h3><p>Delivered multimedia presentations to generate leads, and evaluated consumer touchpoints to inspire opportunities for brand awareness. Exceeded goals: 111% (visits), 109% (presentations), 118% (interviews), 110% (applications).</p>";

        //set all unselected to 
        document.getElementById("TM_logo").style.borderLeft = 0;
        document.getElementById("TM_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("PC_logo").style.borderLeft = 0;
        document.getElementById("PC_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        document.getElementById("RS_logo").style.borderLeft = 0;
        document.getElementById("RS_logo").style.backgroundColor = "rgb(152, 140, 183, 0.5)";

        //set selected
        document.getElementById("Ai_logo").style.borderLeft =  2+"px solid #4B2187";
        document.getElementById("Ai_logo").style.backgroundColor = " #B5ACC0";
        // document.getElementById("Ai_logo").style.width = 198+"px";   
    }
    return (
        // <div onLoad={e =>TMclickedOnLoad(e)}>
        <div onLoad={e =>displayTM()}>
         <h1>Career</h1>
            <div className="main">
            <h2>Professional Experience</h2> 
             <div id="resumeTable">
                <ul id="companySelection">
                    <li onClick={e =>displayTM()} id="TM_logo" className="clickedCompany" tabindex="0"><img   className="longLogo" alt="Ticketmaster Logo" src={require("../media/company_logos/tm.png")} height="20" title="Ticketmaster" /></li>

                    <li onClick={e =>displayRS()} id="RS_logo" className="clickedCompany" tabindex="0"><img className="longLogo"  alt="Riversand Logo" src={require("../media/company_logos/riversand.png")} height="25" title="Riversand Technologies" /></li>

                    <li onClick={e =>displayPC()} id="PC_logo" className="clickedCompany" tabindex="0"><img  alt="Princess Cruises Logo" src={require("../media/company_logos/princess-cruises.png")} height="35" title="Princess Cruises" /></li>

                    <li onClick={e =>displayAi()} id="Ai_logo" className="clickedCompany" tabindex="0"><img   alt="The Art Institutes Logo" src={require("../media/company_logos/Ai.png")} height="35" title="The Art Institutes" /></li>
                </ul>

                <div id="jobDesc" >
                    <h3></h3>
                    <p>Click on a company for more details</p>
                </div>
                 
             </div>
             <a  href={require("../media/myMedia/mrothstein_visual_resume.pdf")} target="_blank" rel="noopener noreferrer">
                <button id="resume">View Resume >></button>
            </a>
            </div>
        </div>
    )
}
}
export default Intro