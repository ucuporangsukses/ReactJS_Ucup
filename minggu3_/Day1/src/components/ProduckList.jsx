import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Sepatu Keren", price: 250000 },
  { id: 2, name: "Kaos Oversize", price: 120000 },
  { id: 3, name: "Celana Cargo", price: 180000 },
];

export default function ProductList() {
  const { addItem } = useCart();

  return (
    <div
      style={{
        border: "2px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>🛒 Daftar Produk</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span>
            {p.name} - Rp{p.price.toLocaleString()}
          </span>
          <button
            onClick={() => addItem(p)}
            style={{
              padding: "6px 10px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            + Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
