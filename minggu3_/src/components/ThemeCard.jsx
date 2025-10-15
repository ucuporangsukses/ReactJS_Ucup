import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeCard({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px 0",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {children}
    </div>
  );
}
