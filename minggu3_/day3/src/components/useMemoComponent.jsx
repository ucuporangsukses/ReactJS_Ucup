import React, { useState, useMemo } from "react";

export default function UseMemoComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 💥 Simulasi perhitungan berat banget
  const expensiveCalculation = useMemo(() => {
    console.log("⚙️ Perhitungan berat dijalankan ulang bre!");
    let total = 0;
    for (let i = 0; i < 10000; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // cuma jalan ulang kalau 'count' berubah

  console.log("🧠 Komponen dirender ulang!");

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#1e293b" }}>
        Optimasi dengan useMemo
      </h2>

      <p>
        <strong>Hasil Perhitungan:</strong> {expensiveCalculation}
      </p>
      <p>Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "8px 14px",
          margin: "5px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Tambah Count
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "8px 14px",
          margin: "5px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

      <div style={{ marginTop: "15px" }}>
        <input
          type="text"
          placeholder="Ketik sesuatu bre..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}
