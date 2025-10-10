import React from "react";
import UseEffectSederhana from "./components/UseEffectSederhana";
import FetchUser from "./components/FetchUser";
import WindowSizeTracker from "./components/WindowSizeTracker";
import MultipleEffect from "./components/MultileEffect";
import SimulasiFetch from "./components/SimulasiFetch";
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contoh useEffect di React</h1>
      <UseEffectSederhana />
      <hr style={{ margin: "40px 0" }} />
      <FetchUser />
      <hr style={{ margin: "40px 0" }} />
      <WindowSizeTracker />
      <hr style={{ margin: "40px 0"}}/>
      <MultipleEffect />
      <hr style={{ margin: "40px 0"}}/>
      <SimulasiFetch />
    </div>
  );
}
