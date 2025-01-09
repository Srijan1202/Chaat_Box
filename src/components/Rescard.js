const Rescard = (props) => {
  const { resData } = props;

  const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.info;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/"+cloudinaryImageId}
      />
      {/* {console.log(resData)} */}
      <div className="cardletter">
      <h3>{name}</h3>
      <br />
      <h4>{cuisines?.join(", ")}</h4>
      <br />
      <h4>{avgRating} Stars</h4>
      <br />
      <h4>{costForTwo}</h4>
      <br />
      <h4>{sla.slaString} minutes</h4>
      </div>
    </div>
  );
};

export default Rescard;
