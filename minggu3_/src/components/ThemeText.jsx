import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeText({ text }) {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ color: theme === "light" ? "#000" : "#fff" }}>
      {text}
    </p>
  );
}
