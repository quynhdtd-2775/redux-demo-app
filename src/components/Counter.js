import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyvalue } from "../redux/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementbyvalue(10));
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByValue}>Increment by value</button>
      </div>
    </div>
  );
};

export default Counter;
