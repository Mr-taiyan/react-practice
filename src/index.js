import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ClassProfilePage } from "./ClassProfilePage";
import { FunctionProfilePage } from "./FunctionProfilePage";

import "./index.css";

function App() {
  const [state, setState] = useState(1);
  return (
    <div className="App">
      <button
        onClick={() => {
          setState((x) => x + x);
        }}
      >
        double
      </button>
      <div>state:{state}</div>
      <FunctionProfilePage user={state} />
      <ClassProfilePage user={state} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
