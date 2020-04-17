import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

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

  deleteDataHandler = () => {
    Axios.delete(`${API_URL}/users/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username: "steve",
      password: "123",
      role: "admin",
      fullName: "steve jobs",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <input
          onClick={this.postDataHandler}
          type="button"
          value="Post data"
          className="btn btn-primary"
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
