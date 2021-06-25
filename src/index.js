import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Form extends PureComponent {
  handleSubmit = () => {
    console.log("test");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name"></input>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
