import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const FancyButton = React.forwardRef((props, ref) => {
//   console.log(ref, "inner");
//   return (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   );
// });

function FancyButton({ reference, children }) {
  console.log(reference, "inner");
  return (
    <button ref={reference} className="FancyButton">
      {children}
    </button>
  );
}

const ref = React.createRef();
console.log(ref, "outer");

ReactDOM.render(
  <FancyButton reference={ref}>Click me</FancyButton>,
  document.getElementById("root")
);
