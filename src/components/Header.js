import { useState } from "react";
import {Logo_URL} from "../utils/constants";


const Header=()=>{
  const [sign, setsign] = useState("Signed In");
    return(
    <div className="header">
      <div className="img">
        <img className='logo' src={Logo_URL} alt="logo"/>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
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