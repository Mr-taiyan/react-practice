import React, { Component, PureComponent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const setFieldValue = useCallback((name, value) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  }, []);
};

ReactDOM.render(<div>test</div>, document.getElementById("root"));
