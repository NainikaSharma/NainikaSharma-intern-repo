import { useSelector } from "react-redux";
import { selectCounter } from "./redux/counterSlice";

function CounterMessage() {

  const count = useSelector(selectCounter);

  return (
    <div>

      {count === 0 && (
        <h3>Counter is zero</h3>
      )}

      {count > 0 && count < 5 && (
        <h3>Keep counting!</h3>
      )}

      {count >= 5 && (
        <h3>Great job! Counter is high.</h3>
      )}

    </div>
  );
}

export default CounterMessage;