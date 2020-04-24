import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80px" }}
      >
        <span>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </span>
        <Link to="/input">Input Screen</Link>
        <Link to="/counter">Counter Screen</Link>
        <span>{this.props.user.username}</span>
        {this.props.user.username ? (
          <a onClick={this.props.onLogout} href="#">
            Logout
          </a>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Field dlm object ini bisa diakses lewat this.props.namaField
    todo: state.haha,
    user: state.user,
  };
};

const mapDispatchToProps = {
  onLogout: logoutHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
