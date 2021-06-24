import React, { Component, PureComponent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MyOwn = ({
  value = {
    price: 0,
    currency: "rmb",
  },
  onChange = () => {},
}) => {
  const handleChange = useCallback(
    (price) => {
      onChange({
        ...value,
        ...price,
      });
    },
    [value, onChange]
  );
  return (
    <div>
      <input
        value={value.price}
        onChange={(evt) => {
          handleChange({ price: evt.target.value });
        }}
      ></input>
      <select
        value={value.currency}
        onChange={(evt) => {
          handleChange({ currency: evt.target.value });
        }}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
      </select>
    </div>
  );
};

function App() {
  const [price, setPrice] = useState();
  return (
    <>
      <MyOwn value={price} onChange={setPrice}></MyOwn>
      <p>{JSON.stringify(price)}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
