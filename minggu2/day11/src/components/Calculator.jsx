// components/Calculator.jsx
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "../utils/converter";

export default function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleTemperatureChange = (value, currentScale) => {
    setTemperature(value);
    setScale(currentScale);
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        background: "#f9f9ff",
        borderRadius: "12px",
        width: "100vh",
        margin: "40px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
         Lifting State Up — Kalkulator Suhu
      </h2>

      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleTemperatureChange}
      />

      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Celsius: {celsius || 0}°C | Fahrenheit: {fahrenheit || 0}°F
      </p>
    </div>
  );
}
