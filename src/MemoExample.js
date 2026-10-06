import React, { useMemo, useState } from 'react';

function MemoExample() {
  const [count, setCount] = useState(0);
  const [numbers] = useState(() => {
    return Array.from({ length: 10000 }, (_, i) => i + 1);
  });

  // Calculation is cached by useMemo below.
  const expensiveCalculation = (numList) => {
    console.log('🔥 Running expensive calculation...');
    return numList.reduce((acc, num) => acc + num, 0);
  };

  // ✅ useMemo prevents recalculation unless numbers change
  const total = useMemo(() => {
    return expensiveCalculation(numbers);
  }, [numbers]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <div className="metric-value">
        <span>Total sum</span>
        <strong>{total.toLocaleString('en-US')}</strong>
      </div>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}

export default MemoExample;
