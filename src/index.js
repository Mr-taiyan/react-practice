import React, { Component, PureComponent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./themed-button";

function ToolBar(props) {
  return <ThemedButton {...props}>Change Theme</ThemedButton>;
}

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      return prev === themes.light ? themes.dark : themes.light;
    });
  }, []);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ToolBar onClick={toggleTheme}></ToolBar>
      </ThemeContext.Provider>
      <ThemedButton />
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
