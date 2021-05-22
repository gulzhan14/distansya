import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Header() {
    return (
        <div>
            <header className="header">
    <div className="head">
<h2 className="head_title">Курс EUR на 2021.04.26</h2>
</div>
 <div className="nav_div">
               
        <div className="menu">
          
                   <ul className="menu_box">   
                    <li className="menu_text">  
                    <Link to="/RUB">RUB</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/CAD">CAD</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/HRK">HRK</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/JPY">JPY</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/NOK">NOK</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/ZAR">ZAR</Link>
                    </li>
                    
                     <li className="menu_text">  
                    <Link to="/RON">RON</Link>
                    </li>
                     <li className="menu_text">  
                    <Link to="/USD">USD</Link>{" "}
                    </li>
                </ul>
                </div>
            </div>
    
</header>
        </div>
    )
}
