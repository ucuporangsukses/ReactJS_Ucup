import React from "react";

export default function StatusMessage({ status }) {
  let message;

  switch (status) {
    case "loading":
      message = "Sedang memuat, bre...";
      break;
    case "success":
      message = "Berhasil bre!";
      break;
    case "error":
      message = "Terjadi kesalahan bre.";
      break;
    default:
      message = "Status tidak dikenal bre.";
  }

  return (
    <div
      style={{
        display: "block",
        border: "1px solid #8b6060ff",
        borderRadius: "8px",
        padding: "15px",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#767f8eff",
      }}
    >
      <h3>{message}</h3>
    </div>
  );
}
