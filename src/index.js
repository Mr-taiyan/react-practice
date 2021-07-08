import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { byName } from "./keyBy";
import Debounce from "./Debounce";
import Demo from "./MUI";

console.log(byName);

ReactDOM.render(<Demo />, document.getElementById("root"));
