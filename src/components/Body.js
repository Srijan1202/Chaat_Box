import Rescard from "./Rescard";
// import resList from "../utils/resList";
import{ useState ,useEffect } from "react"
import Shimmercard from "./Shimmercard";


const Body = () => {
  const[listres, setlistres]=useState([]);

  const[sertxt, setsertxt]= useState([]);

  useEffect(()=>{
    fetchapi()
  },[]);

  const fetchapi=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8498232&lng=77.64768149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setlistres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

  };

  const mapper=[0,1,2,3,4,5,6,7];
  if(listres.length===0){
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filterbtn"
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-con">
        {mapper.map(recard=>(<Shimmercard/>))}
         
        </div>
      </div>
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterbtn"
          onClick={() => {
            const filteredlist = listres.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredlist);
            setlistres(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="Search">
          <input type="text" className="srbox" value ={sertxt} onChange={(e)=>setsertxt(e.target.value)}/>
          <button className="srbut" onClick={()=>{
            const filtered = listres.filter((res)=>{
              return res.info.name.toLowerCase().includes(sertxt.toLowerCase());
            });
            setlistres(filtered);
          }}>Search</button>
        </div>
      </div>
      <div className="res-con">
      {listres.map(recard=>(<Rescard key={recard.info.id} resData={recard}/>))}
       
      </div>
    </div>
  );
};

export default Body;
