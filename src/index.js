import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";

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
