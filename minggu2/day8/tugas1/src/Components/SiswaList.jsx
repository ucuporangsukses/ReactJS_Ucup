import React from "react";

export default function SiswaList() {
  const ujianAkhir = [
    { id: 1, nama: "Ucup", asal: "Tanggerang", nilai: 101 },
    { id: 2, nama: "Irgi", asal: "Banyuwangi", nilai: 99 },
    { id: 3, nama: "Xena", asal: "Ponorogo", nilai: 89 },
  ];

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Daftar Nilai Siswa</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ujianAkhir.map((siswa) => (
          <li
            key={siswa.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              padding: "5px 0",
            }}
          >
            <span>{siswa.nama}</span>
            <span>{siswa.nilai}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
