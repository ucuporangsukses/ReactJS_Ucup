import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ress = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setData(ress.data); // axios udah otomatis JSON
      } catch (err) {
        setError(err.message); // tampilkan pesan error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return <p style={{ color: "orange" }}>🌀 Lagi ambil data, sabar dikit bre...</p>;
  }

  // Error state
  if (error) {
    return <p style={{ color: "red" }}>❌ Error: {error}</p>;
  }

  // Success state
  return (
    <div
      style={{
        background: "#222",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Data Pengguna dari Axios</h2>
      <p><strong>Nama:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Telepon:</strong> {data.phone}</p>
    </div>
  );
}
