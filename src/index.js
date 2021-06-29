import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Cat extends PureComponent {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/logo192.png"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
        alt="cat"
      ></img>
    );
  }
}

class Mouse extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse>{(mouse) => <Cat mouse={mouse} />}</Mouse>
      </div>
    );
  }
}

ReactDOM.render(<MouseTracker />, document.getElementById("root"));
