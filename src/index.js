import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class MessageList extends PureComponent {
  render() {
    let { messages } = this.props;
    return (
      <ul>
        {messages.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

class SendImage extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      inputMsg: "",
    };
  }
  changeInput = (event) => {
    this.setState({
      inputMsg: event.target.value,
    });
  };
  handleClick = () => {
    let newMessage = [...this.state.messages, this.state.inputMsg];
    this.setState({
      messages: newMessage,
      inputMsg: "",
    });
  };
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <input value={this.state.inputMsg} onChange={this.changeInput} />
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}

ReactDOM.render(<SendImage />, document.getElementById("root"));
