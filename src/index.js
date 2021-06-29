import React, { Component, PureComponent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    setState(reducer(state, action));
  };
  return [state, dispatch];
};

ReactDOM.render(<div>test</div>, document.getElementById("root"));
