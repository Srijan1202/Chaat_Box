import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);{}
    }
    render(){
        return(
            <div className="user">
                <h2>{this.props.name}</h2>
                <h3>{this.props.info}</h3>
                <h3>{this.props.contact}</h3>
                {/* <h3>{this.props.name}</h3> */}
            </div>
        );
    };
};

export default UserClass;