import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ToggleButton({ value, onChange }) {
  const handleClick = () => {
    onChange(!value);
  };
  return <button onClick={handleClick}>{value ? "off" : "on"}</button>;
}

function ToggleButtonExample() {
  const [on, setOn] = useState(true);
  return (
    <>
      <h1>toggole button</h1>
      <ToggleButton value={on} onChange={setOn}></ToggleButton>
    </>
  );
}

ReactDOM.render(<ToggleButton />, document.getElementById("root"));
