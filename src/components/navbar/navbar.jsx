import React from "react";
import './navbar.css'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'

function Navbar({let1,let2,let3,let4,let5,let6}){
    return(
        <div>
            <nav className="navbar">
                <img src={logo1}/>
                <ul className="navbar1">
                    <li>
                        <a href='.'>{let1}</a>
                    </li>
                    <li>
                        <a href='.'>{let2}</a>
                    </li>
                    <li>
                        <a href='.'>{let3}</a>
                    </li>
                    <li>
                        <a href='.'>{let4}</a>
                    </li>
                    <li>
                        <a href='.'>{let5}</a>
                    </li>
                    <li>
                        <a href='.'>{let6}</a>
                    </li>
                    <li>
                        <img src={logo2}/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar