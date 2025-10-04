import React from "react";
import ButtonMode from "./Button";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "radial-gradient(circle at center, #0f172a, #020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ButtonMode mode="santai"> Santai</ButtonMode>
      <ButtonMode mode="bantai"> Bantai</ButtonMode>
      <ButtonMode mode="ngetroll"> Ngetroll</ButtonMode>
    </div>
  );
}

export default App;