import React, { Component, PureComponent, useCallback } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ScrollTop() {
  const goTop = useCallback(() => {
    document.body.scrollTop = 0;
  }, []);

  const style = {
    position: "fixed",
    right: "10px",
    bottom: "10px",
  };
  return (
    <button onClick={goTop} style={style}>
      Back to Top
    </button>
  );
}

ReactDOM.render(<div>test</div>, document.getElementById("root"));
