import { useEffect, useState } from "react";

export default function ManipulasiDataJSON() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Gagal ngambil data bre 😭");
        }

        const data = await res.json();

        // 🧠 Manipulasi Data: ambil 5 user pertama & hanya nama + email
        const filteredData = data
          
          .map((user) => ({
            name: user.name,
            email: user.email,
          }));

        setUsers(filteredData);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan bre 😅");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);

  if (loading) {
    return <p style={{ color: "orange" }}>⏳ Lagi ambil data bre...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>❌ Error: {error}</p>;
  }

  return (
    <div
      style={{
        background: "#222",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "20px auto",
      }}
    >
      <h2>🧠 Daftar User (Nama & Email)</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              background: "#333",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Nama:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
