import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tabSelector.css";

class TabSelector extends Component {
  render() {
    let { onChange, options, value } = this.props;
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

class TabSelectorSample extends Component {
  constructor() {
    super();
    this.state = {
      color: null,
    };
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
        ></TabSelector>
      </div>
    );
  }
}

ReactDOM.render(<TabSelectorSample />, document.getElementById("root"));
