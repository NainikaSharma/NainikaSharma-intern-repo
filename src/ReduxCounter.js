import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import Button from './components/Button';

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <h2 className="text-4xl font-bold text-gray-800">Counter: {count}</h2>

      <div className="flex gap-4">
        <Button onClick={() => dispatch(increment())}>Increase</Button>

        <Button onClick={() => dispatch(decrement())}>Decrease</Button>
      </div>
    </div>
  );
}

export default ReduxCounter;
