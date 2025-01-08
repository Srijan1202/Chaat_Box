const Rescard =(props)=>{
    return(
    <div className="res-card">
      <img alt="res-logo" className="res-img"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/l7xlzfeh626mnmhecyy4" alt="res-img"/>
      <h3>{props.resname}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
    );
    };

    export default Rescard;