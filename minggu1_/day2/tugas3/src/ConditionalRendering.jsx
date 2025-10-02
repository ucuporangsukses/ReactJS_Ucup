function ConditionalRendering({ isLoggedIn, messages }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      {/* Ternary: tampilkan pesan login / welcome */}
      <h2>
        {isLoggedIn ? "Selamat datang kembali bre!" : "Silakan login dulu bre."}
      </h2>

      {/* Logical AND: tampilkan jumlah pesan kalo ada */}
      {messages > 0 && <p>Lo punya {messages} pesan baru 🚀</p>}

      {/* Bisa tambah ternary juga buat stok pesan */}
      <p>
        {messages === 0
          ? "Belum ada pesan nih 😎"
          : messages < 5
          ? "Pesan lo sedikit bro, check inbox!"
          : "Banyak pesan! Sibuk nih 😱"}
      </p>
    </div>
  );
}

export default ConditionalRendering;
