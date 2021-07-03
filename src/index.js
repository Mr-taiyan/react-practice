import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SamplePages from "./MyRouter";
// import App from "./NestedRouting";
import TabsPage from "./TabsPage";
import RouterAuth from "./RouterAuth";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RouterAuth />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
