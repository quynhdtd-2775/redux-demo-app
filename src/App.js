import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2> The count from App is: {count}</h2>
      <Counter />
    </div>
  );
}

export default App;
