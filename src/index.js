import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class SendImage extends Component {
  render() {
    return (
      <div>
        <input />
        <button>Send</button>
      </div>
    );
  }
}

ReactDOM.render(<SendImage />, document.getElementById("root"));
