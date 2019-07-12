import React from "react"


const Footer = () => {
    return (
        <footer>
            <p>Designed & Build by Mayan Rothstein  <br/>
            Powered by <img alt="Gatsby" src={require("../media/tech_logos/gatsby.png")}  height="15px" title="Gatsby"/><br/>
            {'\u00A9'} 2019</p>
        </footer>
    )
}
export default Footer