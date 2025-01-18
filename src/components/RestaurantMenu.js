// import { useEffect, useState } from "react"
import Shimmercard from "./Shimmercard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Rescategory from "./Rescategory";
import { useState } from "react";
import Rescat from "./Rescat";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);
  const [show, setShow] = useState(1);
 
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline. Please check your connection.</h1>;
  }

  if (resInfo === null) {
    return <Shimmercard />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="">
      <div className="border-2 border-grey-200 p-5 m-2 rounded-lg">
        <h1 className="">{name}</h1>
        <br />
        <p className="text-orange-600">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
      </div>
      
      <h2 className="flex text-center justify-center m-10">Menu</h2>
      {category.map((c,index) =>
        <Rescat c={c} show={index===show?true:false} setshow={()=>setShow(index)}/>)}
    </div>
  );
};
export default RestaurantMenu;
