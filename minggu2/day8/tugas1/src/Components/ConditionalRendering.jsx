import React, { useState } from "react";

export default function ConditionalRendering() {
  const [isLogin, setIsLogin] = useState(false);

  let message;
  if (isLogin) {
    message = "Selamat datang bre!";
  } else {
    message = "Silakan login dulu bre!";
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "300px",
        backgroundColor: isLogin ? "#e0ffe0" : "#ffe0e0",
        transition: "0.3s",
      }}
    >
      <h2>{message}</h2>

      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          padding: "8px 16px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: isLogin ? "#ff4d4d" : "#4CAF50",
          color: "white",
          transition: "0.3s",
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        Status: <strong>{isLogin ? "Sudah Login" : "Belum Login"}</strong>
      </p>
    </div>
  );
}
