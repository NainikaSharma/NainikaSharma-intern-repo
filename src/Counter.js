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
    <div className="counter-demo">
      <h2>Counter: {count}</h2>

      <div className="counter-buttons">
        <Button onClick={() => updateCount(1)}>Increase</Button>

        <Button onClick={() => updateCount(-1)}>Decrease</Button>
      </div>
    </div>
  );
}

export default Counter;
