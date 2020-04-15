import React from "react";

// let a = {
//   halo: "halo"
// }

// a.nama = "doraemon"

class LifecycleScreen extends React.Component {
  state = {
    username: "",
    time: new Date(),
  };

  // Functions here
  componentDidMount() {
    this.timer = setInterval(() => this.triggerClock(), 1000);
  }

  triggerClock = () => {
    this.setState({ time: new Date() });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Urutan lifecycle
  // render -> didMount

  // re-render !== mount

  // didMount hanya terpanggil setelah render pertama

  render() {
    return (
      <div>
        <h1>Lifecycle Screen</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
        {/* <h2>Welcome, {this.state.username}</h2> */}
        {/* <input
          type="text"
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <a href="https://www.google.com">link google</a> */}
      </div>
    );
  }
}

export default LifecycleScreen;
