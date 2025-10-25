import React from "react";

type ChildProps = {
  onChildClick: () => void;
};

const CallbackChild: React.FC<ChildProps> = ({ onChildClick }) => {
  console.log("%c Child Rendered!", "color: red; font-weight: bold;");

  return (
    <div style={{ padding: "10px", border: "1px solid orange", marginTop: "10px" }}>
      <p>Child Component (React.memo)</p>
      <button
        onClick={onChildClick}
        style={{ padding: "6px 12px", background: "orange", border: "none", cursor: "pointer" }}
      >
        Klik Child
      </button>
    </div>
  );
};

export default React.memo(CallbackChild);
