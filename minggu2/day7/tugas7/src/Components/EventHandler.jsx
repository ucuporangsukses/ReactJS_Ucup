import React, { useState } from "react";

export default function EventHandlerDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Belum ada aksi bre, coba klik atau hover tombol di bawah!");

  const handleClick = () => {
    setCount(count + 1);
    setMessage(`Tombol diklik bre! Count sekarang: ${count + 1}`);
  };

  const handleMouseEnter = () => {
    setMessage("Mouse lagi di atas tombol nih!");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse udah keluar dari tombol.");
  };

  const handleAlert = () => {
    alert("Halo bre! jangan lupa ibadah karna kita milik allah dan kembali kepadanya!! ");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>Event Handler Sederhana</h2>
      <p>{message}</p>
      <p>Count: {count}</p>

      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer" }}
      >
        Klik Gue
      </button>

      <button
        onClick={handleAlert}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Tampilkan Pesan
      </button>
    </div>
  );
}