import React, { useState, useEffect } from "react";

export default function MultipleEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect pertama -> update title saat count berubah
  useEffect(() => {
    document.title = `Klik: ${count}`;
    console.log("Document title diupdate karena count berubah!");
  }, [count]);

  // useEffect kedua -> log ke konsol saat name berubah
  useEffect(() => {
    console.log(`Nama berubah jadi: ${name}`);
  }, [name]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Multiple useEffect</h3>
      <p>Jumlah Klik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Masukkan nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Nama: {name}</p>
      </div>
    </div>
  );
}
