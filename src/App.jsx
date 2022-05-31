import { useState, useEffect } from "react";
import "./App.css";

function App({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
        return
      }
      setSeconds((oldSeconds) => oldSeconds - 1);
    }, 1000);
    return () => clearInterval(interval)
  }, [seconds]);

  return (
    <div className="App">
      <h1 id="timer">{seconds}</h1>
    </div>
  );
}

export default App;
