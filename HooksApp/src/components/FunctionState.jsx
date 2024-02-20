import React, { useState } from "react";

function FunctionState() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Function State: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default FunctionState;
