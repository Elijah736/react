import { useState } from "react";
import './app.css';

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease(){
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="button-container">
          <button onClick={Increase}>Increase</button>

          <button onClick={Decrease}>Decrease</button>

          <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default App