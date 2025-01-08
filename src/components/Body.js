import Rescard from "./Rescard";
import resList from "../utils/resList";
import{ useState } from "react"


const Body = () => {
  const[listres, setlistres]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterbtn"
          onClick={() => {
            const filteredlist =resList.filter(
              (res)=> res.data.avgRating > 4
            );
            console.log(filteredlist  );
            setlistres(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-con">
      {listres.map(recard=>(<Rescard key={recard.data.id} resData={recard}/>))}
       
      </div>
    </div>
  );
};

export default Body;
