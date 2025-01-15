import Contact from "./Contact";
import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div className="aboutcontainer">
            <User name={"Function"} info={"this is the function"} contact={"8972482234"}/>
            <br />
            <UserClass name={"Class"} info={"this is the class"} contact={"8972482234"}/>
        </div>
    );
};

export default About;