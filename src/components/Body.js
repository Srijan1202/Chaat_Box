import Rescard, { Openreses } from "./Rescard";
// import resList from "../utils/resList";
import { useState, useEffect } from "react";
import Shimmercard from "./Shimmercard";
import { res_Api } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listres, setlistres] = useState([]);
  const [fillistres, setfillistres] = useState([]);

  const [sertxt, setsertxt] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(res_Api);
    const json = await data.json();
    setlistres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfillistres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const Openres = Openreses(Rescard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline. Please check your connection.</h1>;
  }

  const mapper = [0, 1, 2, 3, 4, 5, 6, 7];
  if (listres.length === 0) {
    return (
      <div className="body">
        <div className="filter">
          <button className="filterbtn">Top Rated Restaurants</button>
          <div className="Search">
            <input type="text" className="srbox" />
            <button className="srbut">Search</button>
          </div>
        </div>
        <div className="res-con">
          {mapper.map((recard) => (
            <Shimmercard />
          ))}
        </div>
      </div>
    );
  }

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
          <input
            type="text"
            className="srbox"
            value={sertxt}
            onChange={(e) => setsertxt(e.target.value)}
          />
          <button
            className="srbut"
            onClick={() => {
              const filtered = listres.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(sertxt.toLowerCase());
              });
              setfillistres(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-con">
        {fillistres.map((recard) => (
          <Link to={"/restaurants/" + recard.info.id} key={recard.info.id}>
            {console.log(recard.info.isOpen)}
            {recard.info.isOpen ? <Openres resData={recard}/>: <Rescard resData={recard} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
