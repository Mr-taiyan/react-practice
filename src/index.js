import React, {
  Component,
  PureComponent,
  useCallback,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Timer() {
  const [time, setTime] = useState(0);
  const timeId = useRef(null);
  let handleStart = useCallback(() => {
    if (timeId.current) return;
    timeId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);
  let handlePause = useCallback(() => {
    timeId && clearInterval(timeId.current);
    timeId.current = null;
  }, []);
  return (
    <div>
      {time} seconds.
      <br />
      <button onClick={handleStart}>start</button>
      <br />
      <button onClick={handlePause}>pause</button>
    </div>
  );
}

ReactDOM.render(<Timer />, document.getElementById("root"));
