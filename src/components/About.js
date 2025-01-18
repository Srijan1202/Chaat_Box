// import Contact from "./Contact";
import React from "react"
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () =>{
//     return(
//         <div className="aboutcontainer">
//             <UserClass name={"Class"} info={"this is the class"} contact={"8972482234"}/>
//         </div>
//     );
// };


class About extends React.Component{
    constructor(props){
        console.log("parent constructer")
        super(props);
    }

    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render")
        
        return (
            <div className="aboutcontainer">
                <UserContext.Consumer>
                    {({loginfo}) => (
                         <h1>{loginfo}</h1>
                    )}
                </UserContext.Consumer>
                <UserClass name={"Class"} info={"this is the class"} contact={"8972482234"}/>
            </div>
        );
    }
}

export default About;