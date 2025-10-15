import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ➕ Tambah item ke cart
  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ➖ Hapus item dari cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Kosongin cart
  const clearCart = () => setCart([]);

  // 💰 Hitung total harga
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook biar enak dipake
export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart harus dipakai di dalam <CartProvider>");
  return context;
}
