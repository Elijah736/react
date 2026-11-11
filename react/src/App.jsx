import React from "react";
import { useState } from "react";
import './App.css';

function App() {
  const[count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1)
  }

  function Decrease() {
    setCount(prevCount => prevCount > 0 ? prevCount -1 : 0)
  }

  return (
    <div className="counter-container">
      <h1 className="h1element">Counter Application</h1>

      <h2 className="h2element">{count}</h2>

      <div className="button-container">
        <button onClick={Increase} className="increasebutton">+1</button>
        <button onClick={Decrease} className="decreasebutton">-1</button>
      </div>
    </div>
  )
}

export default App;