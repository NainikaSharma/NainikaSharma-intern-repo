import React from "react";

function Child({ onClick }) {
  console.log("🔁 Child rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default React.memo(Child);