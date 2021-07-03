import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SamplePages from "./MyRouter";
// import App from "./NestedRouting";
import TabsPage from "./TabsPage";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:activeTab">
          <TabsPage></TabsPage>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
