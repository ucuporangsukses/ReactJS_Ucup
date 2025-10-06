import { useState } from "react";

export default function UserProfile() {
  const [nama, setNama] = useState("Yusuf");
  const [usia, setUsia] = useState(19);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div
      style={{
        margin: "50px auto",
        padding: "30px",
        width: "300px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      {isEditing ? (
        <>
          <h2>Edit Profil ✍️</h2>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              marginBottom: "10px",
            }}
          />
          <input
            type="number"
            value={usia}
            onChange={(e) => setUsia(e.target.value)}
            placeholder="Masukkan usia"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={handleSave}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Simpan ✅
          </button>
        </>
      ) : (
        <>
          <h2>Profil Pengguna 👤</h2>
          <p>
            <strong>Nama:</strong> {nama}
          </p>
          <p>
            <strong>Usia:</strong> {usia} tahun
          </p>
          <button
            onClick={handleEdit}
            style={{
              backgroundColor: "#FFB100",
              color: "#333",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Edit 📝
          </button>
        </>
      )}
    </div>
  );
}
