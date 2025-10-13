// components/TemperatureInput.jsx
import React from "react";

export default function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e) => {
    onTemperatureChange(e.target.value, scale);
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>
        Masukkan suhu dalam {scaleNames[scale]}:{" "}
        <input
          type="number"
          value={temperature}
          onChange={handleChange}
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #aaa",
            outline: "none",
          }}
        />
      </label>
    </div>
  );
}
