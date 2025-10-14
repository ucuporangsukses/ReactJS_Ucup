import React from "react";
import { useCart } from "../context/CartContext";

export default function CartBadge() {
  const { cart } = useCart();
  return <div className="cart-badge">{cart.length}</div>;
}
