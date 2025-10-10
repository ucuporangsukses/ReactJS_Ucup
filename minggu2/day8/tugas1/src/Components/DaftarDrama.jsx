import React, { useState } from "react";

// 🔥 Import poster dari folder src/assets
import Bloodhounds from "minggu2/day8/tugas1/src/assets/Bloodhounds.jpg";
import MyDemon from "./assets/My_Demon.jpg";
import QueenOfTears from "./assets/Queen_of_Tears.jpg";
import TwentyFiveTwentyOne from "./assets/Twenty_Five_Twenty_One.jpg";
import TheWorstOfEvil from "./assets/The_Worst_of_Evil.jpg";
import Vigilante from "./assets/Vigilante.jpg";

export default function DaftarDrama() {
  const [dramaList, setDramaList] = useState([
    { id: 1, judul: "The Worst of Evil", tahun: 2023, poster: TheWorstOfEvil },
    { id: 2, judul: "Queen of Tears", tahun: 2024, poster: QueenOfTears },
    { id: 3, judul: "Twenty-Five Twenty-One", tahun: 2022, poster: TwentyFiveTwentyOne },
    { id: 4, judul: "Bloodhounds", tahun: 2023, poster: Bloodhounds },
    { id: 5, judul: "My Demon", tahun: 2023, poster: MyDemon },
    { id: 6, judul: "Vigilante", tahun: 2023, poster: Vigilante },
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
                transition: "transform 0.2s",
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
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
          transition: "all 0.2s",
        }}
      >
        Hapus Semua Drama
      </button>
    </div>
  );
}
