import React from "react";
import './green.css'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'

function Green({let18,let19,let20,let21,let22,let23,let24, let25}){
    return(
        <div>
            <div className="section4">
                <div className="green">
                  <div className="gren1">
                    <h1>{let18}</h1>
                  <h1>{let19}</h1>
                  <h1>{let20}</h1>
                  </div>
                  <p>{let21}</p>
                   <p>{let22}</p>
                    <p>{let23}</p>
                     <p>{let24}</p>
                     <img className="image3" src={logo6}/>
                   <div>  <button className="button1">{let25}</button></div>
            </div>
            <div className="gren">
                <img src={logo7}/>
            </div>
            </div>
        </div>
    )
}
export default Green