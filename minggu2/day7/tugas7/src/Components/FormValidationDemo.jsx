import React, { useState } from "react";

export default function FormValidationDemo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // reset error tiap submit

    // 🔎 Validasi sederhana
    if (!formData.email.includes("@")) {
      setError("Email harus mengandung '@' bre!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter, bro!");
      return;
    }
    if (formData.username.trim() === "") {
      setError("Username gak boleh kosong!");
      return;
    }

    // ✅ Kalo lolos validasi
    setSubmittedData(formData);
    console.log("Data yang dikirim:", formData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>Formulir Pendaftaran Bre 😎</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "250px", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "250px", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "250px", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Daftar
        </button>
      </form>

      {/* 🧩 Pesan Error */}
      {error && (
        <p style={{ color: "red", marginTop: "20px", fontWeight: "bold" }}>{error}</p>
      )}

      {/* 🧾 Data Berhasil */}
      {submittedData && !error && (
        <div
          style={{
            marginTop: "20px",
            background: "#e0ffe0",
            padding: "15px",
            borderRadius: "8px",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          <h4>Data Berhasil Dikirim ✅</h4>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
