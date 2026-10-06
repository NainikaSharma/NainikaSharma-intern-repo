import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import Button from './components/Button';

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-demo">
      <h2>Counter: {count}</h2>

      <div className="counter-buttons">
        <Button onClick={() => dispatch(increment())}>Increase</Button>

        <Button onClick={() => dispatch(decrement())}>Decrease</Button>
      </div>
    </div>
  );
}

export default ReduxCounter;
