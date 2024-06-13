import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>counter</h1>
      <p>{count} </p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
