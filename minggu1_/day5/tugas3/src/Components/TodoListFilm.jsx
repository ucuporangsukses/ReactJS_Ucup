import { useState } from "react";

export default function TodoListFilm() {
  const [film, setFilm] = useState("");
  const [daftarFilm, setDaftarFilm] = useState([
    {
      judul: "Queen of Tears",
      selesai: false,
      img: "https://upload.wikimedia.org/wikipedia/en/8/8a/Queen_of_Tears_poster.jpg",
    },
    {
      judul: "It's Okay to Not Be Okay",
      selesai: false,
      img: "https://upload.wikimedia.org/wikipedia/en/a/a0/It%27s_Okay_to_Not_Be_Okay.jpg",
    },
    {
      judul: "Business Proposal",
      selesai: false,
      img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Business_Proposal.jpg",
    },
    {
      judul: "Crash Landing on You",
      selesai: false,
      img: "https://upload.wikimedia.org/wikipedia/en/8/85/Crash_Landing_on_You_main_poster.jpg",
    },
    {
      judul: "Start-Up",
      selesai: false,
      img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Start-Up_%28South_Korean_TV_series%29.jpg",
    },
  ]);

  const tambahFilm = () => {
    if (film.trim() === "") return;
    setDaftarFilm([
      ...daftarFilm,
      { judul: film, selesai: false, img: "https://via.placeholder.com/100x140?text=No+Image" },
    ]);
    setFilm("");
  };

  const toggleSelesai = (index) => {
    const newDaftar = [...daftarFilm];
    newDaftar[index].selesai = !newDaftar[index].selesai;
    setDaftarFilm(newDaftar);
  };

  const hapusFilm = (index) => {
    setDaftarFilm(daftarFilm.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        margin: "40px auto",
        width: "400px",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>🎬 Daftar K-Drama Gue</h2>

      {/* input tambah film */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Masukkan judul K-Drama..."
          value={film}
          onChange={(e) => setFilm(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "none",
          }}
        />
        <button
          onClick={tambahFilm}
          style={{
            backgroundColor: "#FFB100",
            border: "none",
            borderRadius: "6px",
            padding: "8px 10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Tambah
        </button>
      </div>

      {/* daftar film */}
      <ul style={{ marginTop: "15px", listStyle: "none", padding: 0 }}>
        {daftarFilm.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              background: "#1f1f1f",
              padding: "10px",
              borderRadius: "8px",
              gap: "10px",
              textDecoration: item.selesai ? "line-through" : "none",
            }}
          >
            <img
              src={item.img}
              alt={item.judul}
              style={{
                width: "70px",
                height: "100px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0 }}>{item.judul}</h4>
              <div style={{ marginTop: "5px", display: "flex", gap: "6px" }}>
                <button
                  onClick={() => toggleSelesai(index)}
                  style={{
                    backgroundColor: "#4CAF50",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  {item.selesai ? "Belum" : "Selesai"}
                </button>
                <button
                  onClick={() => hapusFilm(index)}
                  style={{
                    backgroundColor: "#E74C3C",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
