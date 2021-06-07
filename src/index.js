import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators, combineReducers, createStore } from "redux";
import "./index.css";

const initialState = { count: 0 };

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return { count: state.count + action.payload.count };
    default:
      break;
  }
  return state;
};

const store = createStore(counter);

function plusOne() {
  return {
    type: "PLUS_ONE",
  };
}

function minusOne() {
  return {
    type: "MINUS_ONE",
  };
}

class Counter extends Component {
  render() {
    const { count, plusOne, minusOne } = this.props;
    return (
      <div className="counter">
        <button onClick={minusOne}>-</button>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {count}
        </span>
        <button onClick={plusOne}>+</button>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne, minusOne }, dispatch);
}

const ConnectedCounter = connect(mapStatetoProps, mapDispatchToProps)(Counter);

class CounterExample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}

ReactDOM.render(<CounterExample />, document.getElementById("root"));
