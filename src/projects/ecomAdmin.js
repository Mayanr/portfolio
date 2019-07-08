import React, { Component} from "react"



class EcomAdmin extends Component {
    render(){
        return (
            <div className="main projectMargin">
            
                <div className = "projectContent">
                    <div className="projectTitle">
                        <h2>Store Admin Site</h2>
                        {/* Links (github and  site link) */}
                        <a href="https://github.com/Mayanr/eCommerce" target="_blank"><img alt="https://github.com/Mayanr/eCommerce" src="https://image.flaticon.com/icons/svg/25/25231.svg"  height="20px"/></a>
                        <a href="http://3.15.40.71/admin" target="_blank"><img alt="http://3.15.40.71/admin" src="https://static.thenounproject.com/png/299638-200.png" height="20px"/></a>
                    </div>
                    <ul >
                        {/* Description:  */}
                        <li>Admin access to The Accessory Store (see prior prioject, above) enables users to add, edit, and track inventory. Login with credentials, email: <b>test@outlook.com</b> and password: <b>demo_login</b>.
                        <p className="italicize">Products not actually for sale. Feel free to add/edit products and play around with features.</p></li>
                        
                        <li > 
                            <p className="functionalities">Noteable Functionalities:</p>
                            <ol>
                                <li>Order info immediately populates as customers make transactions </li>
                                <li>Change order status within a couple clicks</li>
                                <li>Click order ID to review all details for that order </li>
                                <li>"Inventory count" and "quant sold" decrease and increase respectively as orders are placed</li>
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

                <a className="projectLink" href="http://3.15.40.71/admin" target="_blank">
                    <img className = "projectImg" src={require("../media/accessoryStoreAdmin_thumbnail.jpg")}/>
                    <div className="clickLink">
                        <div className="linkText">Manage Inventory & Orders>></div>
                    </div>
                </a>
            </div>
        )
    }
}
export default EcomAdmin