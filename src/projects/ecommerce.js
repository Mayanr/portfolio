import React, { Component} from "react"



class Ecommerce extends Component {
    render(){
        return (
            <div className="main projectMargin">
            
            <a className="projectLink" href="http://3.15.40.71" target="_blank" rel="noopener noreferrer">
                    <img className = "projectImg" src={require("../media/myProjects/accessoryStore_thumbnail.jpg")} alt="Site home page screenshot"/>
                    <div className="clickLink">
                        <div className="linkText">Shop For Accessories>></div>
                    </div>
                </a>

                <div className = "projectContent">
                    <div className="projectTitle">
                        <h2>The Accessory Store</h2>
                        {/* Links (github and  site link) */}
                        <a href="https://github.com/Mayanr/eCommerce" target="_blank" rel="noopener noreferrer"><img alt="https://github.com/Mayanr/eCommerce" src="https://image.flaticon.com/icons/svg/25/25231.svg"  height="20px"/></a>
                        <a href="http://3.15.40.71" target="_blank" rel="noopener noreferrer"><img alt="http://3.15.40.71" src="https://static.thenounproject.com/png/299638-200.png" height="20px"/></a>
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
                            <img alt="python" src=""  height="25px"/>
                            <img alt="django" src="" height="35px"/>
                            <img alt="sqlite" src=""  height="25px"/>
                            <img alt="jinja" src="??"  height="25px"/>

                        </li>
                    </ul>

                    
                </div>

            </div>
        )
    }
}
export default Ecommerce