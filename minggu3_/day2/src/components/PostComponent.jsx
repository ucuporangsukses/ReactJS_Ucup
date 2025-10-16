import React from "react";
import useFetch from "../hooks/useFetch";

export default function PostComponent() {
  // manggil hook useFetch
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>⏳ Lagi ngambil data bre, sabar dulu...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div
      style={{
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>📰 Data Post dari API</h2>
      <p><b>ID:</b> {data.id}</p>
      <p><b>Judul:</b> {data.title}</p>
      <p><b>Isi:</b> {data.body}</p>
    </div>
  );
}
