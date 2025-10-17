import React, { useState } from "react";

// 🧒 Komponen Anak
// React.memo bikin komponen anak cuma re-render kalau props-nya berubah
const Child = React.memo(({ name }) => {
  console.log("🧒 ChildComponent dirender ulang!");
  return (
    <div
      style={{
        backgroundColor: "#f1f5f9",
        padding: "10px",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      <h3>Halo, {name} 👋</h3>
    </div>
  );
});

// 👨 Komponen Induk
export default function ReactMemoComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Bre");

  console.log("👨‍💻 ParentComponent dirender ulang!");

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
        Implementasi React.memo
      </h2>

      <Child name={name} />

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
        onClick={() => setName(name === "Bre" ? "Yoii" : "Bre")}
        style={{
          padding: "8px 14px",
          margin: "5px",
          backgroundColor: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Ganti Nama
      </button>

      <button
        onClick={() => {
          setCount(0);
          setName("Bre");
        }}
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
    </div>
  );
}
