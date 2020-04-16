import React from "react";
import { Link } from "react-router-dom";

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    textbox: "",
  };

  inputHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { username, email, textbox } = this.state;

    return (
      <div>
        <h1>Input Screen</h1>
        <h3>Username: {username} </h3>
        <h3>Email: {email} </h3>
        <input
          onChange={(e) => this.inputHandler(e, "username")}
          // onChange={this.inputHandler}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={(e) => this.inputHandler(e, "email")}
          type="text"
          placeholder="Email"
        />
        <Link to={"/profile/" + username}>
          <input type="button" className="btn btn-primary" value="Login" />
        </Link>
        <br />
        <textarea
          onChange={(e) => this.inputHandler(e, "textbox")}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p> {textbox.length} / 140</p>
      </div>
    );
  }
}

export default InputScreen;
