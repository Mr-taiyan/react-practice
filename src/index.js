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

const Category = ({ match }) => {
  <h1>Sub Category {match.params.subId}</h1>;
};

const SubCategory = ({ match }) => (
  <div>
    <h1>Category {match.params.id}</h1>

    <ul id="menu">
      <li>
        <Link to={`/category/${Math.params.id}/sub/1`}>Sub Category 1</Link>
      </li>
      <li>
        <Link to={`/category/${Math.params.id}/sub/2`}>Sub Category 2</Link>
      </li>
      <li>
        <Link to={`/category/${Math.params.id}/sub/3`}>Sub Category 3</Link>
      </li>
    </ul>
    <div id="page-container-2">
      <Route path="/category/:id/sub/:subId" component={Category}></Route>
    </div>
  </div>
);
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
            {/* <li>
              <Link to="/topic/1">Topic 1</Link>
            </li>
            <li>
              <Link to="/topic/2">Topic 2</Link>
            </li>
            <li>
              <Link to="/topic/3">Topic 3</Link>
            </li> */}
            <li>
              <Link to="/category/1">Category 1</Link>
            </li>
            <li>
              <Link to="/category/2">Category 2</Link>
            </li>
            <li>
              <Link to="/category/3">Category 3</Link>
            </li>
          </ul>
          <div id="page-container">
            <Route path="/category/:id" component={SubCategory}></Route>
          </div>
        </div>
        {/* <div id="page-container"> */}
          {/* <Route path="/home" component={Home}></Route>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/about" component={About}></Route> */}
          {/* <Route path="/topic/:id" component={Topic}></Route> */}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<RouterSample />, document.getElementById("root"));
