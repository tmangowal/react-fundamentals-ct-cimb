import React from "react";

class ProfileScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h2>Welcome, {this.props.match.params.pikachu} </h2>
      </div>
    );
  }
}

export default ProfileScreen;
