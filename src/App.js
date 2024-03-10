import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const countNumber = (counter) => {
    if (counter === "+") return setNumber((state) => state + 1);
    return setNumber((state) => (state - 1 === -1 ? 0 : state - 1));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter</h1>
      <div style={{ display: "flex", alignItem: "center" }}>
        <button
          type="button"
          onClick={() => countNumber("-")}
          style={{ marginRight: "10px" }}
        >
          -
        </button>
        <h2 style={{ padding: "0", margin: "0" }}>{number}</h2>
        <button
          type="button"
          onClick={() => countNumber("+")}
          style={{ marginLeft: "10px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
