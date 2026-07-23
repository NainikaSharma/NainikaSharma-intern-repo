import React, { useState, useEffect } from "react";

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
      <p>Count: {count}</p>
    </div>
  );
}

export default BuggyCounter;