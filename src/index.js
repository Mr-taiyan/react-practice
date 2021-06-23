import React, {
  Component,
  PureComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const getPosition = () => {
  return {
    x: document.body.scrollLeft,
    y: document.body.scrollTop,
  };
};

const useScroll = () => {
  const [position, setPostion] = useState(getPosition());
  useEffect(() => {
    const handler = () => {
      setPostion(getPosition());
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);
  return position;
};

function ScrollTop() {
  const { y } = useScroll();
  const goTop = useCallback(() => {
    document.body.scrollTop = 0;
  }, []);

  const style = {
    position: "fixed",
    right: "10px",
    bottom: "10px",
  };
  if (y > 300) {
    return (
      <button onClick={goTop} style={style}>
        Back to Top
      </button>
    );
  }
  return null;
}

function Test() {
  return (
    <div style={{ background: "yellow", height: "8000px" }}>
      <ScrollTop />
    </div>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
