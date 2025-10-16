import React from "react";
import useForm from "../hooks/useForm";

export default function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    nama: "",
    email: "",
  });

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "10px",
        width: "300px",
        margin: "20px auto",
        background: "#f4f4f4",
      }}
    >
      <h2> Form Data Diri</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Nama: </label>
        <input
          type="text"
          name="nama"
          value={values.nama}
          onChange={handleChange}
          placeholder="Masukin nama lo bre"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Masukin email lo"
        />
      </div>

      <button onClick={resetForm}>Reset</button>

      <hr />

      <h3> Data Real-time:</h3>
      <p>
        <strong>Nama:</strong> {values.nama || "-"}
      </p>
      <p>
        <strong>Email:</strong> {values.email || "-"}
      </p>
    </div>
  );
}
