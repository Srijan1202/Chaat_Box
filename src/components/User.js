
const User =(props)=>{
    return(
        <div className="user">
         <h2>{props.name}</h2>
         <h3>{props.info}</h3>
         <h3>{props.contact}</h3>
         {/* <h3>{props.name}</h3> */}
        </div>
    );
};

export default User;