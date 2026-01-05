import React from "react";

import './section.css'
import logo5 from '../../assets/logo5.png'


function Section({let12,let13,let14,let15,let16,let17}){
    return(
        <div className="section3">
            <div className="section">
                <h4>{let12}</h4>
                <p>{let13}</p>
                <p>{let14}</p>
                <p>{let15}</p>
                <div><img className="image1" src={logo5}/></div>
            </div>
                <div className="section">
                <h4>{let16}</h4>
                <p>{let13}</p>
                <p>{let14}</p>
                <p>{let15}</p>
                <div><img className="image1" src={logo5}/></div>
            </div>
             <div className="section">
                <h4>{let17}</h4>
                <p>{let13}</p>
                <p>{let14}</p>
                <p>{let15}</p>
                <div><img className="image1" src={logo5}/></div>
            </div>

        </div>
    )
}
export default Section