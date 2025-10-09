import React, { useState } from "react";

export default function DaftarDrama() {
  const [dramaList, setDramaList] = useState([
    {
      id: 1,
      judul: "The Worst of Evil",
      tahun: 2023,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTdmZjM2ZjctZGUyYi00NWI1LTg2NjItM2E3OTlkZmM0YmY5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 2,
      judul: "Queen of Tears",
      tahun: 2024,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDQ1NzUwMGMtYzc4Zi00YmM3LWEzMzYtYzM0YTg4YjllNzQ4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 3,
      judul: "Twenty-Five Twenty-One",
      tahun: 2022,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDU1ZTZlNDEtOTBlMC00NTM5LTg4ZjUtNDc0ZjQxZDE2ZGM5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 4,
      judul: "Bloodhounds",
      tahun: 2023,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZDk3OWQ3NmUtNzJiMC00MmY5LWEzMGMtYjllZDIxM2Q3ZjViXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 5,
      judul: "My Demon",
      tahun: 2023,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjYxYzM4ZTctZTdlZS00MmEwLWI3MGMtZGVhYjFlNjA4YzQ3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 6,
      judul: "Vigilante",
      tahun: 2023,
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjFiNDNmOGUtNDhmMi00YzQxLWE5NTktZjQ0M2JkYmE3YmMyXkEyXkFqcGc@._V1_.jpg",
    },
  ]);

  const hapusSemua = () => {
    setDramaList([]);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "900px",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <h2>🎥 Daftar K-Drama Favorit Gue 💖</h2>

      {dramaList.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Belum ada drama bre 😭</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {dramaList.map((drama) => (
            <div
              key={drama.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "10px",
              }}
            >
              <img
                src={drama.poster}
                alt={drama.judul}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ margin: "10px 0 5px" }}>{drama.judul}</h3>
              <p style={{ color: "#777", fontSize: "14px" }}>{drama.tahun}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={hapusSemua}
        style={{
          marginTop: "25px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#e91e63",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Hapus Semua Drama
      </button>
    </div>
  );
}
