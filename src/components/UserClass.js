import React from "react";
import UserContext from "../utils/userContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // tanveeDadhaniya
    this.state = {
      userDeatils: {
        name: "",
        location: "",
        company: "",
        avatarUrl: ""
      },
    };
  }
  async componentDidMount() {
    let userInfo = await (
      await fetch("https://api.github.com/users/tanveeDadhaniya")
    ).json();
    console.log(userInfo);
    this.setState({ userDeatils: userInfo });
  }
  componentDidUpdate() {
    console.log("component Did Update::")
  }
  componentWillUnmount() {
    console.log("component Will Unmount")
  }
  render() {
    const { name, location, company, avatar_url} = this.state.userDeatils;

    return (
      <div className="user-card">
        <h1> This is class based Component</h1>
        <img src={avatar_url}></img>
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h3>Company - {company}</h3>
        <UserContext.Consumer>
          {({loggedInUserName})=> 
            <span>Username : {loggedInUserName}</span>
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
