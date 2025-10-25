import React from "react";

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "6px",
          minWidth: "260px",
          textAlign: "center",
        }}
      >
        <h3>Halo, ini Modal Portal 🎯</h3>
        <p>Modal ini muncul di luar root!</p>

        <button
          onClick={onClose}
          style={{
            marginTop: "16px",
            padding: "6px 12px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Tutup Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
