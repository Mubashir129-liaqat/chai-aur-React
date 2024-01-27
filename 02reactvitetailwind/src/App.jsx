import "./App.css";
import Card from "./components/Card";

function App() {
  const WhoAmI = {
    name: "Mubashir",
    age: 21,
    Institute: "BIIT",
  };
  const Arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-400 p-6 mb-8 text-black rounded-2xl">
        Tailwind Test
      </h1>
      <Card channel="ChaiAurCode" mySelf={WhoAmI} />
      <Card numbers={Arr} btnText="Click me for more" />
      <Card />
    </>
  );
}

export default App;
