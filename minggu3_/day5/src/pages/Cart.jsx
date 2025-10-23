import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const total = items.reduce((s, i) => s + (i.price || 0), 0);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setItems([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Keranjang</h2>
      {items.length === 0 ? (
        <p className="mt-4">Keranjang kosong. <button onClick={() => navigate("/")} className="underline">Belanja dulu</button></p>
      ) : (
        <div className="mt-4">
          <ul className="flex flex-col gap-4">
            {items.map((it, idx) => (
              <li key={idx} className="p-3 bg-[#2a2a2a] rounded flex justify-between items-center">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-gray-400">{it.brand}</div>
                </div>
                <div className="font-bold">${it.price}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${total}</div>
          <div className="mt-4 flex gap-3">
            <button onClick={clearCart} className="px-4 py-2 bg-gray-700 rounded">Kosongkan</button>
            <button onClick={() => alert("Demo checkout — belum terkoneksi")} className="px-4 py-2 bg-gray-300 text-black rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
