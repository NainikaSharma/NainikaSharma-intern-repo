import React, { useState } from 'react';
import Button from './components/Button';

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount((previousCount) => {
      const newCount = previousCount + value;

      if (newCount < 0) {
        return 0;
      }

      return newCount;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h2 className="text-4xl font-bold text-gray-800">Counter: {count}</h2>

      <div className="flex gap-4">
        <Button onClick={() => updateCount(1)}>Increase</Button>

        <Button onClick={() => updateCount(-1)}>Decrease</Button>
      </div>
    </div>
  );
}

export default Counter;
