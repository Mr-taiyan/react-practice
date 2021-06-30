import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FancyButton = React.forwardRef((props, ref) => {
  console.log(ref, "inner");
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

const ref = React.createRef();
console.log(ref, "outer");

ReactDOM.render(
  <FancyButton ref={ref}>Click me</FancyButton>,
  document.getElementById("root")
);
