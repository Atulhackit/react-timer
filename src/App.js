import React, { useState, useEffect } from "react";
import "./styles.css";

// Write a <Timer /> component which allows a user to start and stop
// a timer which displays how many seconds have passed

const Timer = () => {
  const [timerId, setTimerId] = useState();
  const [timer, setTimer] = useState(1000);
  const [start, setStart] = useState("reset");
  const onReset = () => {
    setTimer(1000);
    if (start === "Start") {
      setTimerId(
        setInterval(() => {
          setTimer((state) => state - 1);
        }, 1000)
      );
    }

    setStart("Start");
  };

  const onStop = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    setTimerId(
      setInterval(() => {
        setTimer((state) => state - 1);
      }, 1000)
    );
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <button type="button" onClick={onReset}>
        {start}
      </button>
      <button type="button" onClick={onStop}>
        stop
      </button>
      <div>{timer}</div>
    </>
  );
};

/*
Expected layout:

     0             - [timer. Initial value is 0]

start pause         - [buttons]
*/

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Timer />
    </div>
  );
}
