import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { loginHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

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

    const userData = {
      username,
      password,
    };

    this.props.onLogin(userData);
  };

  // 1. Login dan ubah global state user menjadi data user
  //   -> id, username, fullname, role
  // 2. Check di app.js, jika global state user sudah terisi
  //    dengan data user, set cookie dengan data user

  // 1. componentDidUpdate akan trigger ketika ada sebuah update
  //    -> update => perubahan state atau perubahan props
  // 2. Global state telah di map ke props melalui function mapStateToProps
  //    dan diconnect
  // 3. Berarti global state = props
  // 4. Jika global state berubah, maka props juga akan berubah
  // 5. Jika props berubah, componentDidUpdate akan ke-trigger
  componentDidUpdate() {
    // jika this.props.user.id ada isi, berarti data seseorang sudah dlm global state

    // import Cookie from "universal-cookie";

    // const cookieObject = new Cookie();
    if (this.props.user.id) {
      alert("masuk");
      cookieObject.set("authData", JSON.stringify(this.props.user));
    }
  }

  render() {
    // if (!this.props.user.id) {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card p-5" style={{ width: "400px" }}>
          <h4>Login</h4>
          <p>username: {this.props.user.username}</p>
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
    // } else {
    //   return <div>...</div>;
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  onLogin: loginHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
