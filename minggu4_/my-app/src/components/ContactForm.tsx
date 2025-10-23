import React from "react";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

// Misal user cuma input name & message, email optional
type PartialContact = Omit<ContactFormValues, "email"> & Partial<Pick<ContactFormValues, "email">>;

export function ContactForm({ onSubmit }: { onSubmit: (vals: PartialContact) => void }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email: email || undefined, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded bg-gray-900">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nama" className="w-full p-2 rounded bg-gray-800 border"/>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (optional)" className="w-full p-2 rounded bg-gray-800 border"/>
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Pesan" className="w-full p-2 rounded bg-gray-800 border"/>
      <button type="submit" className="px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-700">Kirim</button>
    </form>
  );
}
