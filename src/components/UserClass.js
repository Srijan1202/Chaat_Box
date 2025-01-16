import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        console.log("child constructer")
        super(props);
        this.state={
            count:0,
            count2:2,
        };
    }
    componentDidMount(){
        console.log("child did mount")
    }
    render(){
        console.log("child rendered")
        const{name,info,contact}=this.props;
        const{count}=this.state;
        return(
            <div className="user">
                <h1>count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:count+1,
                    })
                }}>Increase</button>
                <h2>{name}</h2>
                <h3>{info}</h3>
                <h3>{contact}</h3>
                {/* <h3>count:{count2}</h3> */}
            </div>
        );
    };
};

export default UserClass;