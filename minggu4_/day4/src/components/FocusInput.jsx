import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}>
      <h2>useRef: DOM Access (Fokus & Clear Input)</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Ketik sesuatu bre..."
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleFocus} style={{ marginRight: "10px" }}>
          Fokus Input
        </button>
        <button onClick={handleClear}>
          Clear Input
        </button>
      </div>
    </div>
  );
}

export default FocusInput;
