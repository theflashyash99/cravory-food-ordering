import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this more like a object that store the state value.
      count: 1,
      count2: 1,
      count3 : 34,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          className="border border-black bg-yellow-300 p-1  rounded-xl"
          onClick={() =>
            this.setState({
              //  seting the state
              count: this.state.count + 1,
              count2: this.state.count + 1,
              // don't need to make 2 setState as it's the object format we can set any state from the same place.
            })
          }
        >
          Count +1
        </button>
        <h1>Count: {count2}</h1>

        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
