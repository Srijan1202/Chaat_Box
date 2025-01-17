// import { useEffect, useState } from "react"
import Shimmercard from "./Shimmercard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline. Please check your connection.</h1>;
  }

  if (resInfo === null) {
    return <Shimmercard />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
//   const { itemCards } =
//     resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  const category = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(category);

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
       {category.map((c) => (
        <div className="mx-48 mb-5 flex justify-between border-b mx-6/12 border-grey-200 p-5 m-2 rounded-lg">
          <h1 className="">{c.card.card.title}</h1>
          <div>⬇️</div>
        </div>
       ))}
    












      
      {/* {itemCards.map((item) => (
        <div key={item.card.info.id} className="itemdis">
          <ul>
            <li>
              <h3>{item.card.info.name}</h3>
            </li>

            <li>
              <b>₹{item.card.info.price / 100}</b>
            </li>
            <br />
            <li className="rating">
              <b>{item.card.info.ratings.aggregatedRating.rating}</b>(
              {item.card.info.ratings.aggregatedRating.ratingCount})
            </li>
            <br />
            <li>{item.card.info.description}</li>
          </ul>
          <img
            className="itemimg"
            alt="itemimg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              item.card.info.imageId
            }
          />
        </div>
      ))} */}
    </div>
  );
};
export default RestaurantMenu;
