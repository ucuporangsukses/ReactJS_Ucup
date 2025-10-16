import React from "react";
import ModalComponent from "./components/ModalComponent";
import SwitchComponent from "./components/SwitchComponent";
import PostComponent from "./components/PostComponent";
import CounterComponent from "./components/CounterComponent";
import FormComponent from "./components/FormComponent";
import ThemeComponent from "./components/ThemeComponent";

export default function App() {
  return(
    <div style={{padding: "20px", fontFamily:"sans-serif"}}>
      <h1>Demo Custom Hook useToggle</h1>
      <ModalComponent />
      <SwitchComponent />
      <PostComponent />
      <CounterComponent />
      <FormComponent />
      <ThemeComponent />
    </div>
  )
}