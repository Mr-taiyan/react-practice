import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

let enStrings = {
  submit: "Submit",
  cancel: "Cancel",
};

let cnStrings = {
  submit: "提交",
  cancel: "取消",
};

const LocalContext = React.createContext(enStrings);

class LocaleProvider extends Component {
  constructor() {
    super();
    this.state = {
      locale: cnStrings,
    };
  }
  toggleLocale = () => {
    let locale = this.state.locale === enStrings ? cnStrings : enStrings;
    this.setState({ locale: locale });
  };
  render() {
    return (
      <LocalContext.Provider value={this.state.locale}>
        <button onClick={this.toggleLocale}>change</button>
        {this.props.children}
      </LocalContext.Provider>
    );
  }
}

class LocalButtons extends Component {
  static contextType = LocalContext;
  render() {
    return (
      <div>
        <button>{this.context.submit}</button>
        &nbsp;<button>{this.context.cancel}</button>
      </div>
    );
  }
}

function Sapmple() {
  return (
    <div>
      <LocaleProvider>
        <div>
          <br />
          <LocalButtons />
        </div>
      </LocaleProvider>
    </div>
  );
}

ReactDOM.render(<Sapmple />, document.getElementById("root"));
