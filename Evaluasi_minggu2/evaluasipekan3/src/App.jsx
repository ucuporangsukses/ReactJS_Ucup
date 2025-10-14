import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import CartBadge from "./components/CartBadge";
import "./styles.css";

function AppWrapper() {
  return (
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  );
}

function App() {
  const { theme, dispatch } = useTheme();
  return (
    <div className={theme}>
      <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      <CartBadge />
      <Home />
    </div>
  );
}

export default AppWrapper;
