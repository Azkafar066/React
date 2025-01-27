import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Mendefinisikan state awal

  const increment = () => {
    setCount(count + 1); // Memperbarui state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

