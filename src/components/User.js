import{ useState } from "react"

const User =(props)=>{
    const [count]= useState(0);
    const [count2]= useState(2);
    const {name,info,contact}=props;
    return(
        <div className="user">
         <h2>{name}</h2>
         <h3>{info}</h3>
         <h3>{contact}</h3>
         <h3>count:{count}</h3>
         <h3>count:{count2}</h3>
        </div>
    );
};

export default User;