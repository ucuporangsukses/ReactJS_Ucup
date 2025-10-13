import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: {
      backgroundColor: "#f4f4f4",
      color: "#222",
    },
    dark: {
      backgroundColor: "#222",
      color: "#f4f4f4",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          ...themeStyles[theme],
          minHeight: "100vh",
          padding: "30px",
          transition: "0.3s ease",
        }}
      >
        <h1> Context API Tema Sederhana</h1>
        <ThemeToggleButton />
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        margin: "10px 0",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Ubah ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <h2>
      Ini Header dengan Tema <span style={{ textTransform: "capitalize" }}>{theme}</span>
    </h2>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <p>
      Ini bagian konten, warnanya berubah sesuai tema <strong>{theme}</strong> 
    </p>
  );
}
