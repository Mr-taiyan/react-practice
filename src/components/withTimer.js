import React, { Component } from "react";

export default function withWrapper(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        time: new Date().toLocaleTimeString(),
      };
    }
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    componentDidMount() {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    render() {
      return <WrappedComponent time={this.state.time} {...this.props} />;
    }
  };
}
