import React from "react";


const About = () => {
    return (
        <div >
        <h1>About</h1>
            <div className="main">
            <div id="bio">
                <h2>Hi and Welcome!</h2>
                <p>
                My name is Mayan, and I am a full-stack software developer based in Los Angeles, CA. I enjoy developing efficient, secure back-ends and intuitive, user-friendly front-ends. Building websites, apps, and features that enhance the customer journey excites and motivates me to develop exceptional digital experiences!
                </p>
                <p>
                For a number of years, coding was a hobby; however, in March of 2019 I made the decision to diverge from the marketing career path I had been on, and enrolled in a full-time software development immersive program.
                </p>
                <p>Throughout this contiuous learning process, my marketing background has merged well with my newfound programming abilitities. It's been especially benfitial in recognizing the importance of UX/UI to further monetize websites/apps and connect with the modern consumer. 
                </p>
                <p>
                Some of the technologies I've most recently been working with include:
                </p>

                <ul>
                <li className="techLogos" id="aboutTech">
                    <img alt="Python" src={require("../media/tech_logos/python.png")}  height="40px"/>
                    <img alt="Django" src={require("../media/tech_logos/django.png")}  height="25px"/>
                    <img alt="Flask" src={require("../media/tech_logos/flask.png")}  height="25px"/>
                    <img alt="Jinja" src={require("../media/tech_logos/jinja.png")}  height="30px"/>
                    <img alt="JavaScript" src={require("../media/tech_logos/javascript.png")}  height="30px"/>
                    <img alt="node.js" src={require("../media/tech_logos/nodejs.png")}   height="30px"/>
                    <img alt="Angular" src={require("../media/tech_logos/angular.png")} height="35px"/>
                    <img alt="React" src={require("../media/tech_logos/react.png")} height="30px"/>
                    <img alt="Gatsby" src={require("../media/tech_logos/gatsby.png")}  height="20px"/>
                    <img alt="html" src={require("../media/tech_logos/html.png")}  height="30px"/>
                    <img alt="css" src={require("../media/tech_logos/css.png")}  height="35px"/>
                    <img alt="MySQL" src={require("../media/tech_logos/MySQL.png")}  height="35px"/>
                    <img alt="SQLite" src={require("../media/tech_logos/sqlite.png")}  height="35px"/>
                    <img alt="MongoDB" src={require("../media/tech_logos/mongodb.png")}  height="35px"/>
                    <img alt="Redux" src={require("../media/tech_logos/redux.png")}  height="20px"/>
                </li>
                </ul>
                </div>

                <div id="portfolioPhoto">
                    <img  id="myPhoto" src={require("../media/myMedia/portfolio_photo.jpg")} alt="Mayan Rothstein"/>
                </div>

            </div>
        </div>
    )
}
export default About