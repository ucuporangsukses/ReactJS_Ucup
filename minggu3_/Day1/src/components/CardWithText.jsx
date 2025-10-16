import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function CardWithText({ text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>{text}</p>
    </div>
  );
}
