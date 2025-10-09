import React, { useState } from "react";
import ConditionalRendering from "./Components/ConditionalRendering";
import TernaryRender from "./Components/TernaryRender";
import StatusMessage from "./Components/StatusMessage";
import DaftarDrama from "./Components/DaftarDrama";

export default function App() {
  const [status, setStatus] = useState("loading");

  const buttonStyle = {
    padding: "10px 18px",
    margin: "5px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const buttonVariant = {
    loading: { backgroundColor: "#2196f3", color: "white" },
    success: { backgroundColor: "#4caf50", color: "white" },
    error: { backgroundColor: "#f44336", color: "white" },
    unknown: { backgroundColor: "#9c27b0", color: "white" },
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          color: "#333",
          marginBottom: "30px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        ⚡ Contoh Conditional Rendering di React ⚡
      </h1>

      {/* IF/ELSE */}
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#444" }}>Versi if/else</h2>
        <ConditionalRendering />
      </section>

      {/* TERNARY & && */}
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#444" }}>Versi Ternary & &&</h2>
        <TernaryRender />
      </section>

      {/* SWITCH */}
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#444" }}>Versi Switch Statement</h2>
        <StatusMessage status={status} />

        <div style={{ marginTop: "15px" }}>
          <button
            style={{ ...buttonStyle, ...buttonVariant.loading }}
            onClick={() => setStatus("loading")}
          >
            Loading
          </button>
          <button
            style={{ ...buttonStyle, ...buttonVariant.success }}
            onClick={() => setStatus("success")}
          >
            Success
          </button>
          <button
            style={{ ...buttonStyle, ...buttonVariant.error }}
            onClick={() => setStatus("error")}
          >
            Error
          </button>
          <button
            style={{ ...buttonStyle, ...buttonVariant.unknown }}
            onClick={() => setStatus("unknown")}
          >
            Unknown
          </button>
        </div>
      </section>

      {/* DAFTAR DRAMA */}
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "25px",
        }}
      >
        <h2 style={{ color: "#444", marginBottom: "10px" }}>
          🎥 Daftar Drama Korea Favorit Gue 😎
        </h2>
        <DaftarDrama />
      </section>
    </div>
  );
}
