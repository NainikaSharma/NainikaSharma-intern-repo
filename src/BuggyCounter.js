import React, { useState, useEffect } from 'react';

function BuggyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Fixed Counter</h2>
      <div className="metric-value">
        <span>Count · advances every second</span>
        <strong>{count}</strong>
      </div>
    </div>
  );
}

export default BuggyCounter;
