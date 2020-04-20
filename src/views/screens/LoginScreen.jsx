import React, { Component } from "react";

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
  };

  inputHandler = (event, field) => {
    const { value } = event.target;
    this.setState({ [field]: value });
  };

  loginHandler = () => {
    console.log("login hehe");
  };

  render() {
    return (
      <div>
        <div className="card p-5" style={{ width: "400px" }}>
          <h4>Login</h4>
          <input
            value={loginUsername}
            className="form-control mt-2"
            type="text"
            placeholder="Username"
            onChange={(e) => this.inputHandler(e, "username")}
          />
          <input
            value={loginPassword}
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
  }
}

export default LoginScreen;
