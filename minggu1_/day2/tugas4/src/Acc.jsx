function AccessoryList() {
  // Array data
  const accessories = ["Anting 💍", "Gelang 📿", "Jam Tangan ⌚", "Kalung 📿"];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Daftar Aksesoris:</h2>
      <ul>
        {accessories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AccessoryList;
