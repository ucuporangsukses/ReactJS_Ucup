import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="card fade-in">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}
