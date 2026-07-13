import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCounter } from "./redux/counterSlice";

function Counter() {

  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button 
        onClick={() => dispatch(decrement())}
        disabled={count === 0}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;