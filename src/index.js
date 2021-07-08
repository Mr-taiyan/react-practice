import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { byName } from "./keyBy";
import Debounce from "./Debounce";

console.log(byName);

ReactDOM.render(<Debounce />, document.getElementById("root"));
