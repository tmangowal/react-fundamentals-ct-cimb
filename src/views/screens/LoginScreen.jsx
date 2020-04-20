import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
    loginProfile: {},
  };

  inputHandler = (event, field) => {
    const { value } = event.target;
    this.setState({ [field]: value });
  };

  loginHandler = () => {
    const { username, password } = this.state;

    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        // Login sukses
        if (res.data.length > 0) {
          swal("Success!", "Berhasil berhasil hore", "success");
          this.setState({ isLoggedIn: true, loginProfile: res.data[0] });
        } else {
          swal("Error!", "Username atau password salah", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="container d-flex justify-content-center">
          <div className="card p-5" style={{ width: "400px" }}>
            <h4>Login</h4>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Username"
              onChange={(e) => this.inputHandler(e, "username")}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Password"
              onChange={(e) => this.inputHandler(e, "password")}
            />
            <input
              type="button"
              value="Login"
              className="btn btn-primary mt-3"
              onClick={this.loginHandler}
            />
          </div>
        </div>
      );
    } else {
      return <Redirect to={`/profile/${this.state.loginProfile.id}`} />;
    }
  }
}

export default LoginScreen;
