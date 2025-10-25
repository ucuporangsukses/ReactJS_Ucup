import { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

function CallbackParent() {
  const [count, setCount] = useState(0);

  const handleClickChild = useCallback(() => {
    console.log("Child button clicked!");
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "30px" }}>
      <h2>Nomor 3: useCallback + React.memo</h2>

      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "8px 14px", marginBottom: "10px" }}
      >
        Tambah Counter
      </button>

      <CallbackChild onChildClick={handleClickChild} />
    </div>
  );
}

export default CallbackParent;
