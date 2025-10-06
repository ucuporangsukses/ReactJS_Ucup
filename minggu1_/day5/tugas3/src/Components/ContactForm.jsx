import { useState } from "react";

export default function ContactForm() {
  // 🔥 state berupa objek
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // 🔄 fungsi buat handle semua input sekaligus
  const handleChange = (e) => {
    const { name, value } = e.target;
    // pake spread operator biar field lain ga kehapus
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        margin: "50px auto",
        padding: "30px",
        width: "350px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>📬 Formulir Kontak</h2>

      <label>Nama Depan:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      <label>Nama Belakang:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "15px",
        }}
      />

      <hr />

      <div style={{ color: "#333" }}>
        <h3>🧾 Data Real-time:</h3>
        <p>
          <strong>Nama Depan:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Nama Belakang:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
      </div>
    </div>
  );
}
