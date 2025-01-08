import Rescard from "./Rescard";
import resList from "../utils/resList";


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
      {resList.map(recard=>(<Rescard key={recard.data.id} resData={recard}/>))}
       
      </div>
    </div>
  );
};

export default Body;
