import React, { useState } from "react";

export default function TernaryAndAnd() {
  const [isLogin, setIsLogin] = useState(false);
  const [messages, setMessages] = useState(2);

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{isLogin ? "Selamat datang bre!" : "Silakan login dulu bre!"}</h2>
      {isLogin && messages > 0 && <p>Lo punya {messages} pesan baru bre!</p>}

      <button onClick={() => setIsLogin(!isLogin)} style={{ marginRight: "10px" }}>
        {isLogin ? "Logout" : "Login"}
      </button>
      <button onClick={() => setMessages(messages + 1)}>Tambah Pesan</button>
    </div>
  );
}
