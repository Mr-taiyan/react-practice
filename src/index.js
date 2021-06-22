import React, {
  Component,
  PureComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useSingletom(callback) {
  let called = useRef(false);
  if (called.current) return;
  called.current = true;
  callback();
}

const MyCompo = () => {
  useSingletom(() => {
    console.log("run");
  });
  const [num, setNum] = useState(0);
  function handleClick() {
    setNum((prev) => prev + 1);
  }
  return (
    <div>
      my component{num}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

ReactDOM.render(<MyCompo></MyCompo>, document.getElementById("root"));
