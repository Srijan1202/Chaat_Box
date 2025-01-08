import Rescard from "./Rescard";
import resList from "../utils/data";


const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterbtn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-con">
        <Rescard
          resname="Meghana foods"
          cuisine="Biryani,North Indian,Asian"
          rating="4.4"
          time="38 minuters"
        />
        <Rescard
          resname="KFC"
          cuisine="Burger, Fast food"
          rating="3.4"
          time="54 minuters"
        />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
        <Rescard />
      </div>
    </div>
  );
};

export default Body;
