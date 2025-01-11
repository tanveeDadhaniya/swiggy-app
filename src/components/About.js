import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return <div>
        <h1> About Us</h1>
        <User name= {"Tanvi function"} location={"pune function"}/>
        <UserClass name={"Tanvi class"} location={"Pune class"}/>
    </div>
    }
}
// const About = () => {
//     return <div>
//         <h1> About Us</h1>
//         <User name= {"Tanvi function"} location={"pune function"}/>
//         <UserClass name={"Tanvi class"} location={"Pune class"}/>
//     </div>
// }

export default About;