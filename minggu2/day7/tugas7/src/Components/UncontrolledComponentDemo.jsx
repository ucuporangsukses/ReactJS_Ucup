import React, { useRef, useState } from "react";

export default function UncontrolledComponentDemo() {
  const inputRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // biar ga reload halaman
    const value = inputRef.current.value; // ambil langsung dari ref
    setSubmittedValue(value);
    console.log("Nilai input yang dikirim:", value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>Uncontrolled Component Sederhana</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Masukkan sesuatu bre..."
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Kirim
        </button>
      </form>

      {submittedValue && (
        <p style={{ marginTop: "20px", fontWeight: "bold", color: "blue" }}>
          Nilai yang disubmit: {submittedValue}
        </p>
      )}
    </div>
  );
}
