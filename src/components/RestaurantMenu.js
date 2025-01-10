import { useEffect, useState } from "react"
import Shimmercard from "./Shimmercard";
import { useParams } from "react-router-dom";
import {menu_Api} from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchit()
    },[]);

    const fetchit = async()=> {
        console.log(resId); 
        const data =await fetch(menu_Api+resId+"&submitAction=ENTER");
        console.log(resId);
        const json =await data.json ();

        // console.log(json);
        setResInfo(json.data);
    };  
    // console.log(resInfo?.cards[2]?.card?.card?.info)
    
    if(resInfo===null){
        return(
            <Shimmercard/>
        );
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    // console.log(itemCards)
    return(

        <div className="menu">
            <div className="submenu">
            <h1 >{name}</h1>
            <br />
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            </div>
            <h2 className="menuh2">Menu</h2>
            {itemCards.map((item)=>(
                <div key={item.card.info.id} className="itemdis">
                    <ul>
                        <li><h3>{item.card.info.name}</h3></li>
                        
                        <li><b>₹{item.card.info.price/100}</b></li>
                        <br />
                        <li className="rating"><b>{item.card.info.ratings.aggregatedRating.rating}</b>({item.card.info.ratings.aggregatedRating.ratingCount})</li>
                        <br />
                        <li>{item.card.info.description}</li>
                    </ul>
                <img className="itemimg" alt="itemimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/"+item.card.info.imageId}/>
                </div>
))}
        </div>
    );
};
export default RestaurantMenu           