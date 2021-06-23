import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link, Route, HashRouter as Router } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About</h1>;

export default class RouterSample extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/hello">hello</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
        <div id="page-container">
          <Route path="/home" component={Home}></Route>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<RouterSample />, document.getElementById("root"));
