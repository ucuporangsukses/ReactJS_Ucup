import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "1px solid",
      }}
    >
      Toggle Theme
    </button>
  );
}
