import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loadable from "react-loadable";

const LoadedComponent = Loadable({
  loader: () => import("./HelloLazyLoad"),
  loading({ error }) {
    return error ? "Failed" : "Loading";
  },
});

ReactDOM.render(<LoadedComponent />, document.getElementById("root"));
