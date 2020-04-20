import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Button, Spinner } from "reactstrap";

class RegisterScreen extends Component {
  state = {
    username: "",
    password: "",
    repPassword: "",
    fullName: "",
    isLoading: false,
  };

  inputHandler = (event, field) => {
    const { value } = event.target;

    this.setState({ [field]: value });
  };

  registerHandler = () => {
    // 1. Satuin inputan menjadi 1 object -> untuk dikirim ke db.json
    // 2. Check apakah username tersedia?
    //   2.1 GET users dengan username = this.state.username
    //    GET dengan query params { username: this.state.username }
    //   2.2 Jika array kosong, berarti belum ada yg pakai username tsbt
    //       username -> valid
    //   2.3 Jika array ada isi, berarti username terpakai
    //       username -> invalid
    // 3. Jika case 2.2 lakukan POST request dengan body = step 1
    // 4. Jika case 2.3 alert username invalid

    const { username, password, repPassword, fullName } = this.state;
    let newUser = {
      username,
      fullName,
      password,
      role: "user",
    };

    this.setState({ isLoading: true });
    setTimeout(() => {
      Axios.get(`${API_URL}/users`, {
        params: {
          username,
        },
      })
        .then((res) => {
          if (res.data.length == 0) {
            // Username belum terpakai
            // POST request here
            Axios.post(`${API_URL}/users`, newUser)
              .then((res) => {
                alert("Akun anda telah terdaftar!");
                this.setState({ isLoading: false });
              })
              .catch((err) => {
                alert("Terjadi kesalahan di server, mon map");
                this.setState({ isLoading: false });
              });
          } else {
            // Username sudah terpakai
            // alert here
            alert("Username: " + username + " sudah terpakai");
            this.setState({ isLoading: false });
          }
        })
        .catch((err) => {
          console.log("ERROR", err);
          this.setState({ isLoading: false });
        });
    }, 1500);
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card p-5 text-center" style={{ width: "400px" }}>
          <h4>Register</h4>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Username"
            onChange={(e) => this.inputHandler(e, "username")}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Full Name"
            onChange={(e) => this.inputHandler(e, "fullName")}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Password"
            onChange={(e) => this.inputHandler(e, "password")}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Repeat Password"
            onChange={(e) => this.inputHandler(e, "repPassword")}
          />
          <input
            type="button"
            value="Register"
            className="btn btn-primary mt-3"
            onClick={this.registerHandler}
            disabled={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}

export default RegisterScreen;
