import React, { useState } from "react";

export default function SyntheticEventDemo() {
  const [inputValue, setInputValue] = useState("");

  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log("Link diklik bre! preventDefault() jalan nih");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(`Nilai input sekarang: ${value}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>Contoh SyntheticEvent di React</h2>

      <a
        href="https://google.com"
        onClick={handleLinkClick}
        style={{ display: "block", marginBottom: "20px" }}
      >
        Klik Link Ini (preventDefault aktif)
      </a>

      <input
        type="text"
        placeholder="Ketik sesuatu bre..."
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "10px", width: "250px" }}
      />

      <p style={{ marginTop: "20px" }}>Nilai Input: {inputValue}</p>
    </div>
  );
}
