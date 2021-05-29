import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tabSelector.css";

class TabSelector extends PureComponent {
  render() {
    let { onChange, options, value, children } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map((opt) => {
            return (
              <li
                key={opt.value}
                className={`tab-item ${opt.value === value ? "selected" : ""}`}
                onClick={() => {
                  onChange(opt.value);
                }}
              >
                {opt.name}
              </li>
            );
          })}
        </ul>
        {value && children && children(value)}
      </div>
    );
  }
}

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" },
];

const animals = [
  { name: "Tiger", value: "tiger" },
  { name: "Elephant", value: "elephant" },
  { name: "Cow", value: "cow" },
];

class TabSelectorSample extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        Select Colors:{" "}
        <TabSelector
          options={colors}
          value={this.state.color}
          onChange={(val) => {
            this.setState({ color: val });
          }}
        >
          {(value) => (
            <span
              style={{
                display: "inline-block",
                background: value,
                width: "40px",
                height: "40px",
              }}
            ></span>
          )}
        </TabSelector>
        <br />
        <br />
        <br />
        Select Animals:{" "}
        <TabSelector
          options={animals}
          value={this.state.animal}
          onChange={(val) => {
            this.setState({ animal: val });
          }}
        >
          {(animal) => <img width="100px" alt="img"></img>}
        </TabSelector>
      </div>
    );
  }
}

ReactDOM.render(<TabSelectorSample />, document.getElementById("root"));
