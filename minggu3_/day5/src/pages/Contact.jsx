import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim (demo). Terima kasih bre!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-4 max-w-md flex flex-col gap-3">
        <input name="name" placeholder="Nama" className="p-2 rounded bg-black border border-[#2a2a2a]" />
        <input name="email" placeholder="Email" className="p-2 rounded bg-black border border-[#2a2a2a]" />
        <textarea name="message" placeholder="Pesan" className="p-2 rounded bg-black border border-[#2a2a2a]" />
        <button className="p-2 bg-gray-300 text-black rounded">Kirim</button>
      </form>
    </div>
  );
}
