import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SamplePages from "./MyRouter";
// import App from "./NestedRouting";
import TabsPage from "./TabsPage";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <TabsPage></TabsPage>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
