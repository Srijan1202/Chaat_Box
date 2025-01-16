import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        console.log("child constructer")
        super(props);
        this.state = {
            userinfo: {
                avatar_url:"",
                login: "dummy",
                location: "default",
            },
        };
    }
     async componentDidMount(){

        const data = await fetch("https://api.github.com/users/Srijan1202");
        const json = await data.json();
        console.log(json)

        this.setState({
            userinfo:json
        });
        
        console.log("child did mount")
        console.log(this.state)
    }
    render(){
        console.log("child rendered")
        const{login,location,avatar_url}=this.state.userinfo;
        return(
           
            <div className="user">
                <img src={avatar_url} alt="img" />
                <h2>Name : {login}</h2>
                <h3>Location : {location}</h3>
                {/* <h3>{contact}</h3> */}
                </div>
        );
    };
};

export default UserClass;