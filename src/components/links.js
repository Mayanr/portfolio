import React from "react"


const Links = () => {

    return (
        <div>
            <div className="sidebar" id="myLinks" >
                
                <ul>
                    <li><a id="github" href="" className="link"><img id="GH_logo" alt="my github" src={require("../media/icons/github.png")} height="35"/></a></li>

                    <li><a id="linkedIn" href="" className="link"><img id="LI_logo" alt="my github" src={require("../media/icons/github.png")} height="35"/></a></li>

                    <li><a id="linkedIn" href="" className="link"><img id="LI_logo" alt="my github" src={require("../media/icons/github.png")} height="35"/></a></li>

                    <li><a id="linkedIn" href="" className="link"><img id="LI_logo" alt="my github" src={require("../media/icons/github.png")} height="35"/></a></li>

                </ul>
            </div>
        </div>
    )
}
export default Links