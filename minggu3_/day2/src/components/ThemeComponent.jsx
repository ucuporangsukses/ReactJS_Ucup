import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeComponent() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isLight = theme === "light";

  return (
    <div
      style={{
        backgroundColor: isLight ? "#fff" : "#222",
        color: isLight ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h2>
        🎨 Tema Sekarang: {isLight ? "☀️ Light" : "🌙 Dark"}
      </h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
          backgroundColor: isLight ? "#000" : "#fff",
          color: isLight ? "#fff" : "#000",
        }}
      >
        Ganti ke {isLight ? "Dark" : "Light"}
      </button>
      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        (Coba refresh halaman bre! Temanya tetep ke-save 🔥)
      </p>
    </div>
  );
}
