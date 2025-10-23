import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">404 — Gak ketemu</h1>
      <p className="mt-2">Alamat yang lo cari nggak ada.</p>
      <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-gray-300 text-black rounded">Balik ke Home</button>
    </div>
  );
}
