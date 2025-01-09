import { useState } from "react";
import {Logo_URL} from "../utils/constants";
import { Link } from "react-router-dom";


const Header=()=>{
  const [sign, setsign] = useState("Signed In");
    return(
    <div className="header">
      <div className="img">
        <img className='logo' src={Logo_URL} alt="logo"/>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to ="/">Home</Link>
            </li>
          <li>
            <Link to ="about">About</Link>
            </li>
          <li>
            <Link to ="contact">Contact</Link>
            </li>
            <li>Cart</li>
          <button className="sign" onClick={()=>{
            if(sign==="Signed In"){
              setsign("Signed Out")
            }
            else{
              setsign("Signed In")
            }
          }}>{sign}</button>
        </ul>
      </div>
    </div>
    );
  };
  
  export default Header;