import  { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1 className="h1element">Counter App</h1>

      <h2 className="count">{count}</h2>

      <div className="button-container">
        <button onClick={Increase}>+ 1</button>

        <button onClick={Decrease}>- 1</button>

        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;