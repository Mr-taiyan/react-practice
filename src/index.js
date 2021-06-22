import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useSingletom() {
  console.log("run");
}

const MyCompo = () => {
  useSingletom();
  const [num, setNum] = useState(0);
  function handleClick() {
    setNum((prev) => prev + 1);
  }
  return (
    <div>
      my component{num}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

ReactDOM.render(<MyCompo></MyCompo>, document.getElementById("root"));
