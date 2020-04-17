import React from "react";
import Axios from "axios";

class ProfileScreen extends React.Component {
  state = {
    usersList: [],
  };

  getDataHandler = () => {
    // Axios.get("http://localhost:3001/users")
    //   .then((res) => {
    //     // res = response dari API

    //     console.log(res.data);
    //     // this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Request GET by ID
    // IDnya diletakkan setelah '/' milik nama table
    // Axios.get("http://localhost:3001/users/1")
    //   .then((res) => {
    //     // res = response dari API
    //     console.log(res.data);
    //     this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Axios.get("http://localhost:3001/users", {
    //   params: {
    //     role: "admin",
    //     username: "seto",
    //   },
    // })
    //   .then((res) => {
    //     // res = response dari API
    //     console.log(res.data);
    //     // this.setState({ usersList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    console.log("bukan axios");
  };

  deleteDataHandler = () => {};

  render() {
    return (
      <div className="container">
        <h1>Profile</h1>
        <h2>Welcome, {this.props.match.params.pikachu} </h2>
        <input
          onClick={this.getDataHandler}
          type="button"
          value="Get data"
          className="btn btn-success"
        />
        <input
          onClick={this.deleteDataHandler}
          type="button"
          value="Delete data"
          className="btn btn-danger"
        />
      </div>
    );
  }
}

export default ProfileScreen;

// AXIOS
// AJAX Request
// Asynchronus JavaScript and XML

// <username>seto</username>

// {
//   "username": "seto"
// }
