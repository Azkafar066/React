import React, { useState } from 'react';

function Counter() {
  // Inisialisasi state dengan nilai awal 0 (tipe data number)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Menambah count dengan 1
  };

  const decrement = () => {
    setCount(count - 1); // Mengurangi count dengan 1
  };

  const reset = () => {
    setCount(0); // Mengatur count kembali ke 0
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
// setCount(prevCount => prevCount + 1);
