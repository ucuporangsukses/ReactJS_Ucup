import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
