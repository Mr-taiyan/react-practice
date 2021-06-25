import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Form extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      error: null,
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name) {
      this.setState({ error: "name is required" });
      return;
    }
    this.setState(
      {
        error: null,
      },
      () => {
        console.log("form submit: ", this.state);
      }
    );
  };
  render() {
    const { name } = this.state;
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={name}
            onChange={this.handleNameChange}
          ></input>
        </div>
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
