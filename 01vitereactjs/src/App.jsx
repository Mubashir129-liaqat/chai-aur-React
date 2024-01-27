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
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            // will update the count by one not for four times
            console.log(count);
            //! so i founded the new way to do this...
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            //* Getting the Previous counter and updating it by my view...
            console.log(count);
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
