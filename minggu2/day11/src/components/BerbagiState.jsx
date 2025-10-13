import React, { useState } from "react";
import { formatText } from "../utils/formatText";

export default function BerbagiState() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(formatText(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tulis pesan..."
        value={message}
        onChange={handleChange}
      />
      <p>Pesan: {message}</p>
    </div>
  );
}
