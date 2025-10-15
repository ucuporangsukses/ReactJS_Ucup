import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { notifications, addNotification, clearNotifications } = useContext(NotificationContext);

  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <h2>Header Component</h2>
      <p>Bahasa saat ini: {language}</p>
      <button onClick={toggleLanguage} style={{ marginRight: "10px" }}>
        Ganti Bahasa
      </button>

      <p>Jumlah Notifikasi: {notifications}</p>
      <button onClick={addNotification} style={{ marginRight: "5px" }}>
        Tambah Notifikasi
      </button>
      <button onClick={clearNotifications}>Hapus Semua</button>
    </div>
  );
}
