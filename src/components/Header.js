import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import {Logo_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConstext from "../utils/UserContext";


const Header=()=>{
  const [sign, setsign] = useState("Signed In");
  const onlineStatus=useOnlineStatus();
  const signed = onlineStatus ? "✅" : "🔴";
  const {loginfo}=useContext(UserConstext);
  const cart= useSelector((store)=>store.cart.items);


    return(

    <div className="header">
      <div className="img">
        <img className='logo' src={Logo_URL} alt="logo"/>
      </div>
      <div className="nav-item">
        <ul>
          <li>OnlineStatus:{signed}</li>
          <li>
            <Link to ="/">Home</Link>
            </li>
          <li>
            <Link to ="about">About</Link>
            </li>
          <li>
            <Link to ="contact">Contact</Link>
            </li>
          <li>
            <Link to ="grocery">Grocery</Link>
            </li>
            <li>
            <Link to="cart">Cart(item:{cart.length})</Link>
            </li>

            <li>{loginfo}</li>
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