// import React, { useState } from "react";
import Rescategory from "./Rescategory";

const Rescat = (props) =>{
    const {c} = props;
    // const [show, setshow] = useState(false);

    return(
        <div className="font- p-5 mx-48 mb-5" key={c.card.card.itemCards[1].card.info.id}>
          <div
            className=" flex justify-between border-b mx-6/12 border-grey-200  rounded-lg"
            onClick={() => {
                // props.setshow();
                props.setshow();
                
            }}
          >
            <h1 className="font-extrabold">{c.card.card.title}</h1>
            <div>⬇️</div>
          </div>
          {props.show && c?.card?.card?.itemCards.map((d) => (
            
            <>
              <Rescategory key={d.card.info.id} detail={d} />
            </>
          ))}
        </div>
    )
}

export default Rescat;