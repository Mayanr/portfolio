import React, { Component} from "react"



class DevConnector extends Component {
    render(){
        return (
            <div className="main projectMargin alternatingProj">
            
            <a className="projectLink" href="" target="_blank" rel="noopener noreferrer">
                    <img className = "projectImg" src={require("../media/myProjects/devConnector_thumbnail.jpg")} alt="Site home page screenshot"/>
                    <div className="clickLink">
                        <div className="linkText">Connect with Developers>></div>
                    </div>
                </a>

                <div className = "projectContent alternateSide">
                    <div className="projectTitle">
                        <h2>DevConnector</h2>
                        {/* Links (github and  site link) */}
                        <a href="https://github.com/Mayanr/SocialNetwork" target="_blank" rel="noopener noreferrer"><img alt="https://github.com/Mayanr/SocialNetwork" src={require("../media/icons/github.svg")}  height="20px"/></a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><img alt="" src={require("../media/icons/new_window.png")} height="20px"/></a> */}
                    </div>
                    <ul >
                        {/* Description:  */}
                        <li>A mock Amazon site with a consumer-facing digital storefront, where shoppers can view and add products to the cart, update item order quantity and place orders. See next project (below) for the back-end admin site to manage inventory and orders.
                        <p className="italicize">Products not actually for sale. Feel free to place test orders, as they will not be processed.</p></li>
                        
                        <li > 
                            <p className="functionalities">Noteable Functionalities:</p>
                            <ol>
                                <li>"Latest Additions" pulls 3 most recent items added</li>
                                <li>Shopping cart keeps track of products added</li>
                                <li>Edit product quantity on cart summary page</li>
                                <li>Select the checkmark at chechout to populate billing address with shipping address</li>
                            </ol>
                        </li>

                        <br />
                        {/* Technologies */}
                        <li className="techLogos">
                            <img alt="Python" src={require("../media/tech_logos/python.png")}  height="40px"/>
                            <img alt="Django" src={require("../media/tech_logos/django.png")}  height="25px"/>
                            <img alt="SQLite" src={require("../media/tech_logos/sqlite.png")}  height="25px"/>
                            <img alt="Jinja" src={require("../media/tech_logos/jinja.png")}  height="30px"/>
                        </li>
                    </ul>

                    
                </div>

            </div>
        )
    }
}
export default DevConnector