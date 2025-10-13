import React from "react";
import Calculator from "./components/Calculator";
import PropDrillingChild from "./components/PropDrillingChild";
import BerbagiState from "./components/BerbagiState";
import CounterReducer from "./components/CounterReducer";
import ContextTheme from "./components/ContextTheme"; // ⬅️ INI YANG BELUM ADA, bre

export default function App() {
  return (
    <div>
      <Calculator />
      <PropDrillingChild />
      <CounterReducer />
      <BerbagiState />
      <ContextTheme /> {/* ⬅️ ini udah bisa dipakai sekarang */}
    </div>
  );
}
