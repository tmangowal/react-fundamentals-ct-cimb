import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreenPR extends React.Component {
  state = {
    id: 0,
    username: "",
    role: "",
    fullName: "",
  };

  componentDidMount() {
    let userId = this.props.match.params.userId;

    Axios.get(`${API_URL}/users/${userId}`)
      .then((res) => {
        console.log(res);

        const { id, username, role, fullName } = res.data;
        this.setState({
          id,
          username,
          role,
          fullName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h4>Username: {this.state.username}</h4>
        <h4>Full Name: {this.state.fullName}</h4>
        <h4>Role: {this.state.role}</h4>
      </div>
    );
  }
}

export default ProfileScreenPR;
