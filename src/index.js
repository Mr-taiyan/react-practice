import React, { Component, PureComponent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [data, setData] = useState({ price: 0, currency: "rmb" });
  const handlePrice = useCallback(
    (price) => {
      setData({
        ...data,
        price,
      });
    },
    [data]
  );
  const handleCurrency = useCallback(
    (currency) => {
      setData({
        ...data,
        currency,
      });
    },
    [data]
  );
  return (
    <div>
      <input
        value={data.price}
        onChange={(evt) => {
          handlePrice(evt.target.value);
        }}
      ></input>
      <select
        value={data.currency}
        onChange={(evt) => {
          handleCurrency(evt.target.value);
        }}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
      </select>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
