import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About</h1>;

const Topic = ({ match }) => {
  return <h1>Topci {match.params.id}</h1>;
};
export default class RouterSample extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            {/* <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/hello">hello</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li> */}
            <li>
              <Link to="/topic/1">Topic 1</Link>
            </li>
            <li>
              <Link to="/topic/2">Topic 2</Link>
            </li>
            <li>
              <Link to="/topic/3">Topic 3</Link>
            </li>
          </ul>
        </div>
        <div id="page-container">
          {/* <Route path="/home" component={Home}></Route>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/about" component={About}></Route> */}
          <Route path="/topic/:id" component={Topic}></Route>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<RouterSample />, document.getElementById("root"));
