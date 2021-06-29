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

  return { values, setFieldValue };
};

const App = () => {
  const { values, setFieldValue } = useForm();
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(values);
    },
    [values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          value={values.name || null}
          onChange={(evt) => setFieldValue("name", evt.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          value={values.email || null}
          onChange={(evt) => setFieldValue("email", evt.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
