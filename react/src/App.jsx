import { useState } from "react";
import './app.css';

function App(){
  const [count, setcount] = useState(0);

  function Increase() {
    setcount(count + 1);
  }

  function Decrease() {
    setcount(count - 1);
  }

  function Reset() {
    setcount(0);
  }

  return (
    <div className="container">
       <h1 className="h1element">Counter App</h1>
   
       <h2 className="h2element">{count}</h2>
   
       <button onClick={Increase}>Increase</button>
   
       <button onClick={Decrease}>Decrease</button>
   
       <button onClick={Reset}></button>
    </div>
   );
};

export default App;
