// import { use } from "react";
import Rescategory from "./Rescategory";
import {useSelector} from "react-redux";

const Cart=()=>{
    
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    return( 
        <div className="p-5 mx-48 mb-5">    
        {cart.map((d)=><Rescategory detail={d}/>)}
        </div>
    )
};

export default Cart;