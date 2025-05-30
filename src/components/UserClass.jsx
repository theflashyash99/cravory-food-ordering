import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this more like a object that store the state value.
      userInfo: {
        name: "Username",
        location: "Default",
        avatar_url : "http://dummy-photo.com",
      },
    };
  }

  componentDidUpdate(){

    console.log("Component is Updated!!!!!!!!!")
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/theflashyash99");

    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo : json,
    });
  }

  render() {
    const { name,location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h3>Contact : @theflashyash99</h3>
      </div>
    );
  }
}

export default UserClass;
