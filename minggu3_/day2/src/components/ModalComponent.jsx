import React from "react";
import useToggle from "../hooks/useToggle";

export default function ModalComponent() {
  const [isOpen, toggleModal] = useToggle(false);

  return (
    <div style={{ marginBottom: "30px", textAlign: "center" }}>
      {/* 🖼️ Gambar buat buka/tutup modal */}
      <img
        src={
          isOpen
            ? "https://cdn-icons-png.flaticon.com/512/463/463612.png" // ikon close ❌
            : "https://cdn-icons-png.flaticon.com/512/1828/1828817.png" // ikon open 🟢
        }
        alt="toggle modal"
        onClick={toggleModal}
        style={{
          width: "60px",
          height: "60px",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      {/* 🎉 Isi modal muncul kalo isOpen true */}
      {isOpen && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "20px",
            marginTop: "15px",
            borderRadius: "12px",
            maxWidth: "350px",
            margin: "auto",
          }}
        >
          <h3>🔥 Modal Kebuka Nih Bre!</h3>
          <p>Lo klik lagi gambarnya buat nutup modal 😎</p>
        </div>
      )}
    </div>
  );
}
