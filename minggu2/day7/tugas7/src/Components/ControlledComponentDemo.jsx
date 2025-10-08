import React, { useState } from "react";

export default function ControlledComponentDemo() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // mencegah reload halaman
    setSubmittedName(name);
    console.log(`Form disubmit dengan nama: ${name}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>Controlled Component Sederhana</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama lo bre..."
          value={name}
          onChange={handleChange}
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Kirim
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>Input real-time: {name}</p>

      {submittedName && (
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "green" }}>
          Data disubmit: {submittedName}
        </p>
      )}
    </div>
  );
}
