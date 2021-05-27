import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
    console.log("construct");
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    console.log("did mount");
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log("will unmount");
    clearInterval(this.timer);
  }
  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<Clock></Clock>, document.getElementById("root"));
