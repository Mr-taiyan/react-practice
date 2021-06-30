import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

// function FancyButton({ reference, children }) {
//   console.log(reference, "inner");
//   return (
//     <button ref={reference} className="FancyButton">
//       {children}
//     </button>
//   );
// }

function logProps(Component) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log("old props", prevProps);
      console.log("new props", this.props);
    }

    render() {
      const { reference, ...rest } = this.props;
      return <Component {...rest} ref={reference} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} reference={ref} />;
  });
}

const ref = React.createRef();

ReactDOM.render(
  <FancyButton reference={ref}>Click me</FancyButton>,
  document.getElementById("root")
);
