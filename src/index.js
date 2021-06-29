import React, {
  Component,
  PureComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useForm = (initialState = {}, validators) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value,
      }));

      if (validators[name]) {
        const errMsg = validators[name](value);
        setErrors((errors) => ({
          ...errors,
          [name]: errMsg || null,
        }));
      }
    },
    [validators]
  );

  return { values, setFieldValue, errors };
};

const App = () => {
  const validators = useMemo(() => {
    return {
      name: (value) => {
        if (value.length < 2) return "name length should be no less than 2";
        return null;
      },
      email: (value) => {
        if (!value.includes("@")) return "Invalid email address";
        return null;
      },
    };
  }, []);
  const { values, setFieldValue, errors } = useForm({}, validators);
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
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          value={values.email || null}
          onChange={(evt) => setFieldValue("email", evt.target.value)}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
