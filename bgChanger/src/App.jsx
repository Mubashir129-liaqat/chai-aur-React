import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-1 bg-red-600 rounded-full text-white shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 bg-green-600 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 bg-black rounded-full text-white shadow-lg"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 bg-white rounded-full text-black shadow"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 bg-blue-600 rounded-full text-white shadow-lg"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 bg-pink-600 rounded-full text-white shadow-lg"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 bg-yellow-300 rounded-full text-white shadow-lg"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 bg-orange-600 rounded-full text-white shadow-lg"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
