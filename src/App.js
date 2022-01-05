import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const checkValue = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
      return;
    }
  };

  return (
    <div className="App">
      <h1>This is the counter</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => checkValue()}>
        Decrement
      </button>
    </div>
  );
}

export default App;
