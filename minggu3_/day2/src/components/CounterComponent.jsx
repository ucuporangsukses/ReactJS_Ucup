import React from "react";
import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterComponent() {
  const {
    count,
    increment,
    decrement,
    reset,
    isVisible,
    toggleVisible,
  } = useCounterWithToggle(0);

  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      <h2>Counter With Toggle</h2>

      <button onClick={toggleVisible} style={{ marginBottom: "10px" }}>
        {isVisible ? "Sembunyikan Counter" : "Tampilkan Counter"}
      </button>

      {isVisible && (
        <div>
          <h3>Nilai: {count}</h3>
          <button onClick={increment}>Tambah +</button>
          <button onClick={decrement}>Kurang -</button>
          <button onClick={reset} style={{ marginLeft: "5px" }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
