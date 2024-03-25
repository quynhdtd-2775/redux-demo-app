import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const count = useSelector((state) => state.counter.count);

  const globalOption = useSelector((state) => state.global);
  console.log(globalOption);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(toggleDarkMode(false));
  };

  return (
    <div>
      <h2> The count from App is: {count}</h2>
      <Counter />

      <button onClick={handleChangeMode}> Change Mode</button>
    </div>
  );
}

export default App;
