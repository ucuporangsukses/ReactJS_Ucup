import React, { useState, useEffect } from "react";

export default function SimulasiFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Mulai ambil data bre...");

    // simulasi fetch data (pakai setTimeout)
    const timer = setTimeout(() => {
      const hasilData = {
        nama: "Budi Santoso",
        email: "budi@mail.com",
        pekerjaan: "Frontend Developer",
      };
      setData(hasilData);
      setLoading(false);
      console.log("Data berhasil diambil bre!");
    }, 2000); // delay 2 detik biar kerasa loading-nya

    // cleanup function (optional, biar aman kalo komponen unmount)
    return () => clearTimeout(timer);
  }, []); // cuma dijalankan sekali pas komponen mount

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Simulasi Fetch Data</h3>
      {loading ? (
        <p>Loading data bre...</p>
      ) : (
        <div>
          <p>Nama: {data.nama}</p>
          <p>Email: {data.email}</p>
          <p>Pekerjaan: {data.pekerjaan}</p>
        </div>
      )}
    </div>
  );
}
