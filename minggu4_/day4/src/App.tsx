import { useState } from "react";
import FocusInput from "./components/FocusInput";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { withPortal } from "./components/hoc/withPortal";
import CallbackParent from "./components/CallbackParent"; 
import MouseTracker from "./components/MouseTrackker/MouseTracker"; // versi baru

const PortalModal = withPortal(Modal);

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Evaluasi Harian</h1>

      {/* NOMOR 1 */}
      <h2>Nomor 1: useRef</h2>
      <FocusInput />

      {/* NOMOR 2 */}
      <div style={{ marginTop: "30px" }}>
        <h2>Nomor 2: Modal via React Portal</h2>
        <Button label="Buka Modal" onClick={() => setOpen(true)} />
      </div>
      {open && <PortalModal onClose={() => setOpen(false)} />}

      {/* NOMOR 3 */}
      <div style={{ marginTop: "30px" }}>
        <CallbackParent />

        {/* NOMOR 4 */}
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
          <h1>Mouse Tracker Example</h1>

          <p>Simple text display:</p>
          <MouseTracker
            render={({ x, y }) => <p>Mouse position: ({x}, {y})</p>}
          />

          <p>Red box following the mouse:</p>
          <MouseTracker
            render={({ x, y }) => (
              <div/> )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
