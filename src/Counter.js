import React, { useState } from "react";
import Button from "./components/Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h2 className="text-4xl font-bold text-gray-800">
        Counter: {count}
      </h2>

      <div className="flex gap-4">
        <Button onClick={() => setCount(count + 1)}>
          Increase
        </Button>

        <Button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default Counter;