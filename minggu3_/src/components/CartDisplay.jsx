import React from "react";
import { useCart } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useCart();

  return (
    <div
      style={{
        border: "2px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>🧾 Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p>Belum ada item di cart bre 😅</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>
                {item.name} x {item.quantity} = Rp
                {(item.price * item.quantity).toLocaleString()}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  padding: "4px 8px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Hapus
              </button>
            </div>
          ))}

          <h3>Total: Rp{total.toLocaleString()}</h3>

          <button
            onClick={clearCart}
            style={{
              padding: "6px 12px",
              background: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
