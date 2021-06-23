import React, { Component, PureComponent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useCount(initial) {
  let [count, setCount] = useState(initial);
  let increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  let decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);
  let reset = useCallback(() => {
    setCount(0);
  }, [setCount]);
  return { count, increment, decrement, reset };
}

function Example() {
  const { count, increment, decrement, reset } = useCount(0);
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById("root"));
