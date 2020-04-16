import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80px" }}
      >
        <Link to="/auth">Register | Login</Link>
        <Link to="/input">Input Screen</Link>
        <Link to="/counter">Counter Screen</Link>
      </div>
    );
  }
}

export default Navbar;
