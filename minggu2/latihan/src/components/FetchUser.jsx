import React, { useState, useEffect } from "react";

export default function FetchUser() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("Ngambil data user dengan ID:", userId);
    // simulasi fetch data
    const dataDummy = {
      1: { nama: "Budi", email: "budi@mail.com" },
      2: { nama: "Sinta", email: "sinta@mail.com" },
      3: { nama: "Agus", email: "agus@mail.com" },
    };
    setUser(dataDummy[userId]);
  }, [userId]); // efek cuma jalan kalo userId berubah

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Data Pengguna</h3>
      <p>Nama: {user.nama}</p>
      <p>Email: {user.email}</p>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
    </div>
  );
}
