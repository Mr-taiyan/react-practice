import React, { Component, PureComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useKeyPress = (domNode = document.body) => {
  const [key, setkey] = useState(null);
  useEffect(() => {
    const handleKeyPress = (evt) => {
      setkey(evt.keyCode);
    };
    domNode.addEventListener("keypress", handleKeyPress);
    return () => {
      domNode.removeEventListener("keypress", handleKeyPress);
    };
  }, [domNode]);
  return key;
};

function UseKeyPressExample() {
  const key = useKeyPress();
  return (
    <div>
      <h1>useKeyPress</h1>
      <label>key press: {key || "N/A"}</label>
    </div>
  );
}

ReactDOM.render(<UseKeyPressExample />, document.getElementById("root"));
