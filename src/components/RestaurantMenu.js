// import { useEffect, useState } from "react"
import Shimmercard from "./Shimmercard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    const {resInfo}=useRestaurantMenu(resId);

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
      return(
        <h1>You are offline. Please check your connection.</h1>
      );
    };

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
                <img className="itemimg" alt="itemimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/>
                </div>
))}
        </div>
    );
};
export default RestaurantMenu           