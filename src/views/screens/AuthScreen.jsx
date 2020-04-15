import React from "react";

class AuthScreen extends React.Component {
  state = {
    username: "",
    password: "",
    repPassword: "",
    isLoggedIn: false,
    users: [],
    loginUsername: "",
    loginPassword: "",
    currentUsername: "",
    activeEditIdx: null,
  };

  asd = () => {};

  render() {
    const {
      username,
      password,
      repPassword,
      isLoggedIn,
      users,
      currentUsername,
      activeEditIdx,
      loginPassword,
      loginUsername,
    } = this.state;

    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    const registerHandler = () => {
      if (repPassword == password) {
        let newData = {
          username,
          password,
        };

        this.setState({
          users: [...users, newData],
          username: "",
          password: "",
          repPassword: "",
        });

        console.log(users);
      } else {
        alert("Password belum cocok");
      }
    };

    const loginHandler = () => {
      for (let i = 0; i < users.length; i++) {
        if (
          users[i].username == loginUsername &&
          users[i].password == loginPassword
        ) {
          this.setState({
            isLoggedIn: true,
            currentUsername: users[i].username,
            loginUsername: "",
            loginPassword: "",
          });
          break;
        }

        if (i == users.length - 1) {
          alert("User tidak ada atau password salah");
        }
      }
    };

    const deleteHandler = (idx) => {
      let temp = [...users];

      temp.splice(idx, 1);

      this.setState({ users: temp });
    };

    const renderUsers = () => {
      return users.map((val, idx) => {
        if (idx == activeEditIdx) {
          return (
            <tr>
              <td>{idx + 1}</td>
              {/* <td>{val.username}</td> */}
              <td>
                <input type="text" placeholder={val.username} />
              </td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-danger"
                  onClick={() => deleteHandler(idx)}
                />
              </td>
            </tr>
          );
        } else {
          return (
            <tr>
              <td>{idx + 1}</td>
              <td>{val.username}</td>
              <td>
                <input
                  type="button"
                  value="Edit"
                  className="btn btn-info"
                  onClick={() => this.setState({ activeEditIdx: idx })}
                />
              </td>
            </tr>
          );
        }
      });
    };

    return (
      <div>
        <h1>Auth Screen</h1>
        <center className="container">
          <div className="card p-5" style={{ width: "400px" }}>
            <h4>Register</h4>
            <input
              value={username}
              className="form-control mt-2"
              type="text"
              placeholder="Username"
              onChange={(e) => inputHandler(e, "username")}
            />
            <input
              value={password}
              className="form-control mt-2"
              type="text"
              placeholder="Password"
              onChange={(e) => inputHandler(e, "password")}
            />
            <input
              value={repPassword}
              className="form-control mt-2"
              type="text"
              placeholder="Repeat Password"
              onChange={(e) => inputHandler(e, "repPassword")}
            />
            <input
              type="button"
              value="Register"
              className="btn btn-primary mt-3"
              onClick={registerHandler}
            />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
          </table>
          {/* <div className="card p-5" style={{ width: "400px" }}>
            <h4>Login</h4>
            <input
              value={loginUsername}
              className="form-control mt-2"
              type="text"
              placeholder="Username"
              onChange={(e) => inputHandler(e, "loginUsername")}
            />
            <input
              value={loginPassword}
              className="form-control mt-2"
              type="text"
              placeholder="Password"
              onChange={(e) => inputHandler(e, "loginPassword")}
            />
            <input
              type="button"
              value="Login"
              className="btn btn-primary mt-3"
              onClick={loginHandler}
            />
          </div>
          {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null} */}
        </center>
      </div>
    );
  }
}

export default AuthScreen;
