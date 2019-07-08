import React from "react";


const About = () => {
    return (
        <div >
        <h1>About</h1>
            <div className="main">
            <div id="bio">
                <h2>Hi and Welcome!</h2>
                <p>
                My name is Mayan, and I am a full-stack software developer based in Los Angeles, CA. I enjoy developing efficient, secure back-ends and intuitive, responsive front-ends. Building websites, apps, and features that enhance the customer journey excites and motivates me to develop exceptional digital experiences!
                </p>
                <p>
                For a number of years, coding was a hobby; however, in March of 2019 I made the decision to diverge from the marketing career path I had been on, and enrolled in a full-time software development immersive program, where I spent over 70 hours each week coding (nearly 1000 hours of coding during a three and a half month period). 
                </p>
                <p>Throughout this contiuous learning process, my marketing background has merged well with my newfound programming abilitities. It's been especially benfitial in recognizing the importance of UX/UI to further monetize websites/apps and connect with the modern consumer. 
                </p>
                <p>
                Some of the technologies I've most recently been working with include:
                </p>

                <ul>
                <li className="techLogos" id="aboutTech">
                    <img alt="node.js" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"  height="30px"/>
                    <img alt="Angular" src="https://angular.io/assets/images/logos/angular/angular.png" height="35px"/>
                    <img alt="React" src="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png" height="30px"/>
                    <img alt="Gatsby" src="https://www.drupalcampnj.org/sites/default/files/styles/large/public/2018-12/gatsby-horizontal.png?itok=Y5h62v_t"  height="25px"/>
                    <img alt="JavaScript" src="http://pluspng.com/img-png/logo-javascript-png-javascript-tutorials-400.png"  height="30px"/>
                    <img alt="Python" src="http://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-PNG-Image.png"  height="40px"/>
                    <img alt="MySQL" src="http://www.dreamsoftz.com/wp-content/uploads/2015/10/MySQL-logo-759x494.png"  height="35px"/>
                    <img alt="MondoDB" src="https://versioneye.files.wordpress.com/2014/07/mongodb-logo.png?w=640"  height="35px"/>
                    <img alt="Redux" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png"  height="25px"/>
                </li>
                </ul>
                </div>

                <div id="portfolioPhoto">
                    <img  src={require("../media/portfolio_photo.jpg")} height="200px" alt="Mayan Rothstein"/>
                </div>

            </div>
        </div>
    )
}
export default About