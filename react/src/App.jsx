import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [isRunning, setisRunning] = useState(false);
  const [Seconds, setSeconds] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Hours, setHours] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const timeout = setTimeout(() => {
        if (Seconds === 59) {
          setSeconds(0);
          setMinutes(prev => prev + 1)
        } else {
          setSeconds(prev => prev + 1)
        } 

        if (Minutes === 59) {
          setMinutes(0);
          setHours(prev => prev + 1)
        }
      }, 10);

      return () => clearTimeout(timeout);

    };
  

  }, [isRunning, Seconds, Minutes]);





  return (
    <div className='timer-container'>
      <h1>Timer Application</h1>

      <h2>{Hours.toString().padStart(2, 0)}:{Minutes.toString().padStart(2, 0)}:{Seconds.toString().padStart(2, 0)}</h2>

      <div className='buttoncontainer'>
        <button className='start'onClick={() => setisRunning(true)}>Start</button>
        <button className='reset' onClick={() => setSeconds(0) || setMinutes(0) || setHours(0)}>Reset</button>
        <button className='stop' onClick={() => setisRunning(false)}>Stop</button>
      </div>
    </div>
  )
}   

export default App;