import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Mubsahir is working on the Vite React</h1>
      <h4>Counter is : {count} </h4>
      <button
        onClick={() => {
          if (count < 20) {
            setCount(count + 1);
          } else {
            console.log("counter must be less than 20");
          }
        }}
      >
        Add Counter
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            console.log("counter must be greator than 0");
          }
        }}
      >
        Remove Counter
      </button>
    </div>
  );
}

export default App;
