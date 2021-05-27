import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Scroll extends Component {
  constructor() {
    super();
    this.Ref = React.createRef();
    this.state = {
      msgs: [],
    };
  }
  pushNewMsg() {
    this.setState((prev) => {
      return { msgs: [prev.msgs.length, ...prev.msgs] };
    });
  }
  getSnapshotBeforeUpdate() {
    return this.Ref.current.scrollHeight;
  }
  componentDidMount() {
    console.log(this.Ref.current);
    for (let i = 0; i < 20; i++) {
      this.pushNewMsg();
    }
    this.interval = setInterval(() => {
      if (this.state.msgs.length === 200) {
        clearInterval(this.interval);
        return;
      }
      this.pushNewMsg();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.Ref.current.scrollTop;
    if (scrollTop < 5) return;
    this.Ref.current.scrollTop =
      scrollTop + (this.Ref.current.scrollHeight - prevScrollHeight);
  }
  render() {
    return (
      <div ref={this.Ref} className="snapshot-sample">
        {this.state.msgs.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Scroll />, document.getElementById("root"));
