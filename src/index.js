import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import { useSearchParam } from "react-use";
import "./index.css";

const Demo = () => {
  const edit = useSearchParam("edit");
  return (
    <div>
      <div>edit: {edit || "🤷‍♂️"}</div>
      <div>
        <button
          onClick={() =>
            window.history.pushState(
              {},
              "",
              window.location.pathname + "?edit=123"
            )
          }
        >
          Edit post 123 (?edit=123)
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            window.history.pushState(
              {},
              "",
              window.location.pathname + "?edit=999"
            )
          }
        >
          Edit post 999 (?edit=999)
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            window.history.pushState({}, "", window.location.pathname)
          }
        >
          Close modal
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
