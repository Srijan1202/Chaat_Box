import {Logo_URL} from "../utils/constants";


const Header=()=>{
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
        </ul>
      </div>
    </div>
    );
  };
  
  export default Header;